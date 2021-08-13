var express = require('express');
var router = express.Router();
// var controller = require('../controllers/BlankPage');
router.get('/test', (req , res) => {
    const info = {
        test: 'atk test'
    }
    res.send(info)
})
module.exports = router;