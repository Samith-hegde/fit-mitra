const prisma = require('../../config/prismaClient');

const findExerciseById = async (id) => {
  return await prisma.exercises.findUnique({
    where: { id: parseInt(id) },
  });
};

const findAllExercises = async () => {
  return await prisma.exercises.findMany();
};

const createNewExercise = async (exerciseData) => {
  return await prisma.exercises.create({
    data: exerciseData,
  });
};

const updateExistingExercise = async (id, exerciseData) => {
  return await prisma.exercises.update({
    where: { id: parseInt(id) },
    data: exerciseData,
  });
};

const deleteExerciseById = async (id) => {
  return await prisma.exercises.delete({
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
