var express = require('express');
const blankPageModel = require('../models/blankPage.model')
const getBlankPage = (req, res) => {
     let result = blankPageModel.blankPageModel()
     console.log(result);
     // res.send('Hello Expressjs and router and get controller getBlankPage');
     res.send(result.data);
};
module.exports = { getBlankPage };