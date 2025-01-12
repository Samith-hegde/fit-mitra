const prisma = require('../../config/prismaClient');

const findUserById = async (id) => {
  return await prisma.users.findUnique({
    where: { id: parseInt(id) },
    exclude: { password: true },
    include: {
      Friends: {
        select: {
          id: true,
          friend_id: true,
          username: true,
        },
      },
      CommunityPosts: {
        select: {
          id: true,
          title: true,
          content: true,
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
