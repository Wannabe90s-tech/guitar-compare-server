var express = require('express');
const blankPageModel = require('../models/blankPage.model')
const getBlankPage = async (req, res) => {
     let result = await blankPageModel.blankPageModel()
     console.log(result);
     // res.send('Hello Expressjs and router and get controller getBlankPage');
     return result
};
module.exports = { getBlankPage };