var express = require('express');
var router = express.Router();
var controller = require('../controllers/login.controller');
router.get('/login', async (req , res)=>{
    let result = await controller.login(req) 
    res.json(result)
})
module.exports = router;