const jwt = require('jsonwebtoken')
require("dotenv").config()
const autenticateToken = (req , res , next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TONKEN_SECRET , (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
    })
    next()
}
module.exports = {
    autenticateToken
}