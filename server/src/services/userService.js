const prisma = require('../../config/prismaClient');

const findUserById = async (id) => {
  return await prisma.users.findUnique({
    where: { id: parseInt(id) },
    select: {
      id: true,
      username: true,
      email: true,
      bio: true,
      fitness_goals: true,
      date_of_birth: true,
      height: true,
      weight: true,
      created_at: true,
      updated_at: true,
      is_admin: true,
      Friends: {
        select: {
          id: true,
          friend_id: true,
        },
      },
      CommunityPosts: {
        select: {
          id: true,
          title: true,
          post_type: true,
          likes: true,
          created_at: true,
        },
      },
    },
  });
};

const findAllUsers = async () => {
  return await prisma.users.findMany();
};

const createNewUser = async (userData) => {
  return await prisma.users.create({ data: userData });
};

const updateExistingUser = async (id, userData) => {
  return await prisma.users.update({
    where: { id: parseInt(id) },
    data: userData,
  });
};

const deleteUserById = async (id) => {
  return await prisma.users.delete({
    where: { id: parseInt(id) },
  });
};

module.exports = {
  findUserById,
  findAllUsers,
  createNewUser,
  updateExistingUser,
  deleteUserById,
};
