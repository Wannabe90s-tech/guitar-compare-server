const connect = require('../config/db')
var jwt = require('jsonwebtoken')
require("dotenv").config()
const loginModel = async (data) => {
    let users = [
        {
            id: '1',
            name: 'supachai'
        },
        {
            id: '2',
            name: 'ketsirin'
        },
    ]
    console.log(data.body);
    let userss = users.find((item) => item.name==data.body.name) 
    // console.log(data.headers['authorization'].split(' ')[1])
    if(userss){
        const accessToken = await jwt.sign(userss , process.env.ACCESS_TONKEN_SECRET, { expiresIn: '48h' })
        let datas = {
            users: userss , 
            accessToken : accessToken
        }
        console.log(datas)
        return datas
    }
    
    
    
}
module.exports = { loginModel }