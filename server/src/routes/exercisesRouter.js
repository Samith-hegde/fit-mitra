const express = require('express');
const router = express.Router();

const { getAllExercises, createExercise, updateExercise, deleteExercise } = require('../controllers/exerciseController');

router.get('/getAllExercises', getAllExercises);
router.post('/createExercise', createExercise);
router.put('/updateExercise/:id', updateExercise);
router.delete('/deleteExercise/:id', deleteExercise);

module.exports = router;