const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/transaction', require('./transactions'))

module.exports = router