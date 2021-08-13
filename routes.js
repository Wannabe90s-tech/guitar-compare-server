const blankPage = require('./routes/blankPage')
const test = require('./routes/test')
module.exports = function (app) {
    app.use('/',blankPage)
    app.use('/',test)
}