const users = require('express').Router();

const userContoller = require('../controllers/users');

users.get('/', userContoller.getAllUsers);
users.post('/', userContoller.createUser);

module.exports = users;