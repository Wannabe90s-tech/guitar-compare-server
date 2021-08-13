var express = require('express');
var router = express.Router();
var controller = require('../controllers/blankPage.controller');
router.get('/blankPage', controller.getBlankPage )
router.get('/blankPage/io', (req , res) => {
    res.send('io')
})
module.exports = router;