var express = require('express');
var router = express.Router();

// var controller = require('../controllers/BlankPage');
router.get('/images', (req , res) => {
    let guitarImagesLists = [
        'http://localhost:5002/assets/images/g1.jpg',
        'http://localhost:5002/assets/images/g2.jpg',
        'http://localhost:5002/assets/images/g3.jpg'
    ]
    res.json(guitarImagesLists)
})
module.exports = router;