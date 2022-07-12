const profile = require('express').Router();
const profileController = require('../controllers/profile');
const uploadProfile = require('../middleware/uploadProfile');
const profileValidator = require('./profileValidator');
const validation = require('../middleware/validation');

profile.get('/', profileController.getAllProfile);
profile.post('/', profileController.createProfile);
profile.patch('/:id', uploadProfile, ...profileValidator, validation, profileController.editProfile);
profile.delete('/:id', profileController.deleteProfile);

module.exports = profile;
