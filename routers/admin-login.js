const express = require('express')
const router = express.Router()
const { adminLoginPage } = require('../controllers/admin-login')

router.get('/admin', adminLoginPage)

module.exports = router