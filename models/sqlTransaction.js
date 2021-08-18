const connection = require('../config/db')
module.exports = {
    async executeTransaction(callback) {
        connection.beginTransaction()

        try {
            const { res, error, } = await callback()
            error ? connection.rollback() : connection.commit()

            return { res: res, require: !error, }
        } catch (err) {
            connection.rollback()

            console.log(" catch error :: ", err);

            return { err: err, require: false, }
        }
    }
}