const express = require('express');
const router = express.Router();

const { getWorkout, getAllWorkouts, createWorkout, updateWorkout, templateWorkout, deleteWorkout } = require('../controllers/workoutController');

router.get('/', getAllWorkouts);
router.get('/:id', getWorkout);
router.post('/create', createWorkout);
router.post('/template', templateWorkout);
router.put('/:id', updateWorkout);
router.delete('/:id', deleteWorkout);

module.exports = router;