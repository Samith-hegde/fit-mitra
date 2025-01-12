const prisma = require('../../config/prismaClient');

const findWorkoutById = async (id) => {
  return await prisma.workout.findUnique({
    where: { id: parseInt(id) },
    include: {
      Exercises: {
        select: {
          exercise_id: true,
          sets: true,
          reps: true,
          distance: true,
          duration: true,
          weight: true,
          exercise: {
            select: {
              name: true,
              muscle_group: true,
              description: true,
            },
          },
        },
      },
    },
  });
};

const findAllWorkoutsByUserId = async (user_id) => {
  return await prisma.workout.findMany({
    where: { user_id: parseInt(user_id) },
  });
};

const createNewWorkout = async (user_id, workoutData) => {
  return await prisma.workout.create({
    data: {
      ...workoutData,
      Exercises: {
        create: workoutData.Exercises,
      },
      user_id: parseInt(user_id),
    },
  });
};

const updateExistingWorkout = async (id, workoutData) => {
  return await prisma.workout.update({
    where: { id: parseInt(id) },
    data: {
      ...workoutData,
      Exercises: {
        create: workoutData.Exercises,
      },
    },
  });
};

const saveWorkoutAsTemplate = async (id, workoutData) => {
    return await prisma.workout.update({
        where: { id: parseInt(id) },
        data: {
        ...workoutData,
        isTemplated: true,
        },
    });
};

const deleteWorkoutById = async (id) => {
  return await prisma.workout.delete({
    where: { id: parseInt(id) },
  });
};

module.exports = {
  findWorkoutById,
  findAllWorkoutsByUserId,
  createNewWorkout,
  updateExistingWorkout,
  saveWorkoutAsTemplate,
  deleteWorkoutById,
};
