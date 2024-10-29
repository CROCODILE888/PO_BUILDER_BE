const express = require('express');
const { register, login, name } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/name', name)

module.exports = router;
