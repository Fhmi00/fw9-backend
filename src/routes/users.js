const users = require('express').Router();

const userContoller = require('../controllers/users');

users.get('/', userContoller.getAllUsers);

module.exports = users;