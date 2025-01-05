const express = require('express');
const router = express.Router();

const { getSocials, createSocial, updateSocial, deleteSocial } = require('../controllers/socialController');

router.get('/', getSocials);
router.post('/create', createSocial);
router.put('/:id', updateSocial);
router.delete('/:id', deleteSocial);

module.exports = router;