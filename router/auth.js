const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth')

const path = require('path');
'auth/register'

router.post('/register',authController.register)

module.exports = router;