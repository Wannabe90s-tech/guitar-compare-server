const blankPage = require('./routes/blankPage')
const test = require('./routes/test')
const login = require('./routes/login')
const auth = require('./config/auth')
module.exports = function (app) {
    app.use('/', auth.autenticateToken , blankPage)
    app.use('/', auth.autenticateToken , test)
    app.use('/', auth.autenticateToken , login)
}