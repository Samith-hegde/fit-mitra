const express = require('express');
const router = express.Router();

const { getAllUsers, getUserById, updateUser, deleteUser, getProfile } = require('../controllers/userController');

router.get('/getAllUsers', getAllUsers);
router.put('/updateUserById', updateUser);
router.get('/getUserById/:id', getUserById);
router.delete('/deleteUser', deleteUser);
router.get('/getProfile', getProfile);

module.exports = router;