const users = require('express').Router();
const userController = require('../controllers/users');
const {body} = require('express-validator');
const bcrypt = require('bcrypt');


const createUserValidator = [
  body('email')
    .isEmail().withMessage('invalid email'), 
  body('username')
    .isLength({min: 4}).withMessage('username length min 4 chars'),
  body('password')
    .isLength({min: 8}).withMessage('password length min 8 chars')
    .customSanitizer(async val => {
      const hash = await bcrypt.hash(val, 10);
      return hash;
    })
];

users.get('/:id', userController.getUserById);
users.get('/', body('limit').toInt(), body('page').toInt(), userController.getAllUsers);
users.post('/', ...createUserValidator, userController.createUser);
users.patch('/:id', userController.editUser);
users.delete('/:id', userController.deleteUser);

module.exports = users;