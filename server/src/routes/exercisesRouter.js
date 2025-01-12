const express = require('express');
const router = express.Router();

const { getAllExercises, createExercise, updateExercise, deleteExercise } = require('../controllers/exerciseController');

router.get('/', getAllExercises);
router.post('/create', createExercise);
router.put('/:id', updateExercise);
router.delete('/:id', deleteExercise);

module.exports = router;