const connect = require('../config/db')
const blankPageModel = async () => {
    let result = new Promise((resolve , reject) => {
        connect.query('SELECT * FROM personnal', (err, rows, fields) => {
                if(err){
                    return reject(err)
                }else{
                    return resolve(rows)
                }
        })
    })
    return result
}
module.exports = { blankPageModel }