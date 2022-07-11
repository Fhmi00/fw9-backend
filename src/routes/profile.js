const profile = require('express').Router();
const profileController = require('../controllers/profile');
const uploadProfile = require('../middleware/uploadProfile');
const { body } = require('express-validator');

const validation = [
  body('fullname').isString().withMessage('fullname must be a string'),
  body('balance').toInt().isNumeric().withMessage('Balance must be a number'),
  body('phonenumber').isMobilePhone('id-ID').withMessage('incorrect phone number')
];

profile.get('/', profileController.getAllProfile);
profile.post('/', profileController.createProfile);
profile.patch('/:id', uploadProfile, ...validation,profileController.editProfile);
profile.delete('/:id', profileController.deleteProfile);

module.exports = profile;
