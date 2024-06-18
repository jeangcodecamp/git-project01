const express = require('express')
const { getProfile } = require('../controllers/user-controller')
const router = express.Router()

// this is user-route
router.get('/', getProfile)

module.exports = router