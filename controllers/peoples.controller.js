var express = require('express');
const PeopleModel = require('../models/peoples.model')
const login = async (req, res) => {
     let result = await PeopleModel.login(req)
     return result
}
const register = async (req, res) => {
     let result = await PeopleModel.register(req)
     return result
}
module.exports = { 
     login ,
     register
 };