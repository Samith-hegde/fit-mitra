const prisma = require('../../config/prismaClient');
const communityPostQueries = require('./communityPostService');

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
  if(workoutData.uploadAsPost) {
    const postData = {
      user_id: user_id,
      title: workoutData.title,
      caption: workoutData.postCaption,
      post_type: 'Workout',
      content: JSON.stringify(workoutData.Exercises),
    }
    await communityPostQueries.createPost({
      ...postData
    })    
  }

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
  const fullWorkoutData = await findWorkoutById(id);

  if(!fullWorkoutData.uploadAsPost && workoutData.uploadAsPost) {
    const postData = {
      user_id: fullWorkoutData.user_id,
      title: workoutData.title || fullWorkoutData.title,
      caption: workoutData.postCaption || fullWorkoutData.caption,
      post_type: 'Workout',
      content: JSON.stringify(workoutData.Exercises || fullWorkoutData.Exercises),
    }
    await communityPostQueries.createPost(postData)    
  }

  return await prisma.workout.update({
    where: { id: parseInt(id) },
    data: {
      ...workoutData,
      Exercises: {
        deleteMany: {},
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
