const express = require('express');
const router = express.Router();

const { getExercises, createExercise, updateExercise, deleteExercise } = require('../controllers/exerciseController');

router.get('/', getExercises);
router.post('/create', createExercise);
router.put('/:id', updateExercise);
router.delete('/:id', deleteExercise);

module.exports = router;