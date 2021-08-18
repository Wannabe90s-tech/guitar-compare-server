const jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')
require("dotenv").config()
const autenticateToken = (req , res , next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TONKEN_SECRET , (err, userCode) => {
        if(err) return res.sendStatus(403)
        req.userCode = userCode
    })
    next()
}

const hashPassword = (myPlaintextPassword) => {
    const saltRounds = 10
    const result = new Promise((resolve , reject) => {
            bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
                if(err){
                    reject(err)
                }else{
                    resolve(hash)
                }
            });
        })
    return result
}
const comparePassword = (clientPassword , dbPassword) =>{
    const result = new Promise((resolve , reject) => {
            bcrypt.compare(clientPassword, dbPassword, function(err, result) {
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            });
        })
    return result
}
module.exports = {
    autenticateToken ,
    hashPassword ,
    comparePassword
}