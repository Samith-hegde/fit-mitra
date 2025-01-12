const express = require('express');
const router = express.Router();

const { getWorkout, getAllWorkouts, createWorkout, updateWorkout, templateWorkout, deleteWorkout } = require('../controllers/workoutController');

router.get('/getAllWorkouts', getAllWorkouts);
router.get('/getWorkout/:id', getWorkout);
router.post('/createWorkout', createWorkout);
router.put('/templateWorkout/:id', templateWorkout);
router.put('/updateWorkout/:id', updateWorkout);
router.delete('/deleteWorkout/:id', deleteWorkout);

module.exports = router;