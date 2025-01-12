const workoutQueries = require('../queries/workoutService');

const getWorkoutById = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await workoutQueries.findWorkoutById(id);
    res.json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllWorkoutsforUserId = async (req, res) => {
  const { user_id } = req.params;
  try {
    const workouts = await workoutQueries.findAllWorkoutsByUserId(user_id);
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createWorkout = async (req, res) => {
  try {
    const newWorkout = await workoutQueries.createNewWorkout(req.body);
    res.json(newWorkout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedWorkout = await workoutQueries.updateExistingWorkout(id, req.body);
    res.json(updatedWorkout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedWorkout = await workoutQueries.deleteWorkoutById(id);
    res.json(deletedWorkout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getWorkoutById,
  getAllWorkoutsforUserId,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
