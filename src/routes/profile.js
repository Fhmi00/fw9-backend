const profile = require('express').Router();

const profileController = require('../controllers/profile');

const upload = require('../helpers/uploads');

profile.get('/', profileController.getAllProfile);
profile.post('/', upload.single('picture'), profileController.createProfile);
profile.patch('/:id', profileController.editProfile);
profile.delete('/:id', profileController.deleteProfile);

module.exports = profile;
