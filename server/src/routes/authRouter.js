const express = require('express');
const router = express.Router();

const { login, getRegister, postRegister, logout } = require('../controllers/authController');

router.post('/login', login);
router.get('/register', getRegister)
router.post('/register', postRegister);
router.get('/logout', logout);

module.exports = router;