var express = require('express');
var router = express.Router();
var PeopleController = require('../controllers/peoples.controller');
router.get('/login', async (req , res)=>{
    let result = await PeopleController.login(req) 
    res.json(result)
})
router.post('/register', async (req , res)=>{
    let result = await PeopleController.register(req) 
    res.json(result)
})
module.exports = router;