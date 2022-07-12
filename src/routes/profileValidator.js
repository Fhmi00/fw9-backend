const {body} = require('express-validator');

const profileValidator = [
  body('fullname').isString().withMessage('fullname must be a string'),
  body('balance').toInt().isNumeric().withMessage('Balance must be a number'),
  body('phonenumber').isMobilePhone('id-ID').withMessage('incorrect phone number')
];


module.exports = profileValidator;