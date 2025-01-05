const express = require('express');
const router = express.Router();

const { getWorkout, createWorkout, templateWorkout, updateWorkout, deleteWorkout } = require('../controllers/workoutController');

router.get('/:id', getWorkout);
router.post('/create', createWorkout);
router.post('/template', templateWorkout);
router.put('/:id', updateWorkout);
router.delete('/:id', deleteWorkout);

module.exports = router;