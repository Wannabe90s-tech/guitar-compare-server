const connection = require('../config/db')
var jwt = require('jsonwebtoken')
var auth = require('../config/auth')
require("dotenv").config()
const login = async (data) => {
    let username = data.body.username
    let password = data.body.password
    let result = new Promise((resolve , reject) => {
        connection.query(`SELECT * FROM peoples WHERE username = ${connection.escape(username)}`, async (err, rows, fields) => {
                if(err){
                    return reject(err)
                }else{
                    if(await auth.comparePassword(password,rows[0].password)){
                        let usernameToken = { name : rows[0].username }
                        const accessToken = await jwt.sign(usernameToken , process.env.ACCESS_TONKEN_SECRET, { expiresIn: '48h' })
                        let data = {
                            people: rows[0] || {} ,
                            token: accessToken
                        }
                        return resolve(data)
                    }else{
                        return resolve("fail")
                    }
                }
        })
    })
    return result
}
const register = async (data) => {
        let result = new Promise((resolve , reject) => {
        let sql1 = `SELECT CONCAT(SUBSTRING(peopleCode, 1,1),SUBSTRING(peopleCode, 2,8)+1) AS peopleCode 
                    FROM peoples
                    ORDER BY peopleId DESC  
                    LIMIT 1`
            connection.beginTransaction()
            ///query1
            connection.query(sql1, async (err, rows, fields) => {
                // if(err) return connection.rollback() , reject({ status: 'fail' })
                    if(err){
                        connection.rollback()
                        return resolve({ status: 'fail' })
                    }
                    console.log(rows[0].peopleCode);
                    ///query2
                    let sql2 = `
                        INSERT INTO peoples (
                            peopleCode , 
                            peopleFirstName , 
                            peopleLastName ,
                            email ,
                            username , 
                            password
                            )
                            VALUES (
                            ${connection.escape(rows[0].peopleCode)} ,
                            ${connection.escape(data.body.peopleFirstName)},
                            ${connection.escape(data.body.peopleLastName)},
                            ${connection.escape(data.body.email)},
                            ${connection.escape(data.body.username)},
                            ${connection.escape(await auth.hashPassword(data.body.password))}
                            )
                    ` 
                    connection.query(sql2, (err, rows, fields) => {
                        // if(err) return connection.rollback() , reject({ status: 'fail' })
                            if(err){
                                connection.rollback()
                                return resolve({ status: 'fail' })
                            }
                            connection.commit()
                            return resolve({ status: 'success' })
                        })
            })
        })
        return result 
}

module.exports = { 
    login ,
    register
 }