const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/transaction', require('./transactions'));
router.use('/profile', require('./profile'));

module.exports = router;