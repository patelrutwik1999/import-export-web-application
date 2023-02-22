const express = require('express')
const router = express.Router()
const { adminLandingPage } = require('../controllers/admin-landing-page')

router.get('/', adminLandingPage)

module.exports = router