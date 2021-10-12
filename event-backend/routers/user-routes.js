const express = require('express');
const users = express.Router();
const {check} = require('express-validator');

const usersControllers = require("../Controllers/Users-Controllers");

users.post("/signup",[check('email').normalizeEmail().isEmail() ,check('password').isLength({min:6}) ],usersControllers.signup);

users.post("/login",usersControllers.login);


module.exports = users;     