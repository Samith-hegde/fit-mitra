const prisma = require('../../config/prismaClient');

const createPost = async (postData) => {
  return await prisma.community_posts.create({
    data: {
      ...postData,
      user_id: parseInt(postData.user_id),
    },
  });
};

const updatePost = async (id, postData) => {
  return await prisma.community_posts.update({
    where: { id: parseInt(id) },
    data: postData,
  });
};

const deletePost = async (id) => {
  return await prisma.community_posts.delete({
    where: { id: parseInt(id) },
  });
};

const findPostById = async (id) => {
  return await prisma.community_posts.findUnique({
    where: { id: parseInt(id) },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          email: true,
        },
      },
    },
  });
};

const findSocialFeed = async (user_id) => {
  const is_admin = await prisma.users.findUnique({
    where: { id: parseInt(user_id) },
    select: { is_admin: true },
  });

  if (is_admin.is_admin) {
    return await prisma.community_posts.findMany({
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
      },
    });
  }
  
  return await prisma.community_posts.findMany({
    where: {
      user_id: { not: parseInt(user_id) },
    },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          email: true,
        },
      },
    },
  });
};

const likePost = async (id) => {
  return await prisma.community_posts.update({
    where: { id: parseInt(id) },
    data: {
      likes: { increment: 1 },
    },
  });
};

const unlikePost = async (id) => {
  return await prisma.community_posts.update({
    where: { id: parseInt(id) },
    data: {
      likes: { decrement: 1 },
    },
  });
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  findPostById,
  findSocialFeed,
  likePost,
  unlikePost,
};
