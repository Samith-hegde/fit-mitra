const express = require('express');
const router = express.Router();

const { createSocial, updateSocial, deleteSocial, getSocialById, getSocialsFeed, likeSocial, unlikeSocial } = require('../controllers/socialController');

router.get('/', getSocialsFeed);
router.post('/create', createSocial);
router.put('/:id', updateSocial);
router.delete('/:id', deleteSocial);
router.get('/:id', getSocialById);
router.put('/:id/like', likeSocial);
router.put('/:id/unlike', unlikeSocial);

module.exports = router;