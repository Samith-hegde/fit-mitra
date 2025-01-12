const prisma = require('../../config/prismaClient');

const findExerciseById = async (id) => {
  return await prisma.exercise.findUnique({
    where: { id: parseInt(id) },
  });
};

const findAllExercises = async () => {
  return await prisma.exercise.findMany();
};

const createNewExercise = async (exerciseData) => {
  return await prisma.exercise.create({
    data: exerciseData,
  });
};

const updateExistingExercise = async (id, exerciseData) => {
  return await prisma.exercise.update({
    where: { id: parseInt(id) },
    data: exerciseData,
  });
};

const deleteExerciseById = async (id) => {
  return await prisma.exercise.delete({
    where: { id: parseInt(id) },
  });
};

module.exports = {
  findExerciseById,
  findAllExercises,
  createNewExercise,
  updateExistingExercise,
  deleteExerciseById,
};
