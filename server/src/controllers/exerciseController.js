const exerciseQueries = require('../services/exerciseService');

const getAllExercises = async (req, res) => {
  try {
    const exercises = await exerciseQueries.findAllExercises();
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createExercise = async (req, res) => {
  try {
    const newExercise = await exerciseQueries.createNewExercise(req.body);
    res.json(newExercise);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateExercise = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedExercise = await exerciseQueries.updateExistingExercise(id, req.body);
    res.json(updatedExercise);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteExercise = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedExercise = await exerciseQueries.deleteExerciseById(id);
    res.json(deletedExercise);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllExercises,
  createExercise,
  updateExercise,
  deleteExercise,
};
