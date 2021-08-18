const blankPage = require('./routes/blankPage')
const images = require('./routes/images.route')
const login = require('./routes/peoples.route')
const auth = require('./config/auth')
module.exports = function (app) {
    app.use('/', auth.autenticateToken , blankPage)
    app.use('/', auth.autenticateToken , images)
    app.use('/', auth.autenticateToken , login)
}