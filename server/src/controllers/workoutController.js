const workoutQueries = require('../services/workoutService');

const getWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await workoutQueries.findWorkoutById(id);
    res.json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllWorkouts = async (req, res) => {
  const { user_id } = req.query;
  try {
    const workouts = await workoutQueries.findAllWorkoutsByUserId(user_id);
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createWorkout = async (req, res) => {
  try {
    const { user_id } = req.query;
    const newWorkout = await workoutQueries.createNewWorkout(user_id, req.body);
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

const templateWorkout = async (req, res) => {
    const { id } = req.params;
    try {
        const templateWorkout = await workoutQueries.saveWorkoutAsTemplate(id, req.body);
        res.json(templateWorkout);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

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
  getWorkout,
  getAllWorkouts,
  createWorkout,
  updateWorkout,
  templateWorkout,
  deleteWorkout,
};
