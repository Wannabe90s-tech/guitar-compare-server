var express = require('express');
var router = express.Router();
var controller = require('../controllers/blankPage.controller');
router.get('/blankPage', async (req ,res)=> {
    let result = await controller.getBlankPage()
    res.send(result)
} )
router.get('/blankPage/io', (req , res) => {
    res.send('supachaiGit')
})
module.exports = router;