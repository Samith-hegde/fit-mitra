const express = require('express');
const router = express.Router();

const { getAllSocialsOfUser, createSocial, updateSocial, deleteSocial, getSocialById, getSocialsFeed, likeSocial, unlikeSocial } = require('../controllers/socialController');

router.get('/getFeed', getSocialsFeed);
router.get('/getAllSocialsOfUser', getAllSocialsOfUser);
router.post('/createSocial', createSocial);
router.put('/updateSocial/:id', updateSocial);
router.delete('/deleteSocial/:id', deleteSocial);
router.get('/getSocial/:id', getSocialById);
router.put('/:id/like', likeSocial);
router.put('/:id/unlike', unlikeSocial);

module.exports = router;