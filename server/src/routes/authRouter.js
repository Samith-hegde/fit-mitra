const express = require('express');
const router = express.Router();

const { postRegister } = require('../controllers/authController');

router.post('/login', login);
router.get('/register', getRegister)
router.post('/register', postRegister);
router.get('/logout', logout);

module.exports = router;