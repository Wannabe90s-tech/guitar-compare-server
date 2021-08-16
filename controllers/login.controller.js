var express = require('express');
const Login = require('../models/login.model')
const login = async (req, res) => {
     let result = await Login.loginModel(req)
     return result
};
module.exports = { login };