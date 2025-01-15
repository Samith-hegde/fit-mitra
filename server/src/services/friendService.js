const prisma = require('../../config/prismaClient');

const createFriendRequest = async (userId, friendId, status) => {
    return await prisma.friends.create({
        data: {
            userId: parseInt(userId),
            friendId: parseInt(friendId),
            status,
        },
    });
};

const updateFriendRequest = async (userId, friendId, status) => {
    return await prisma.friends.updateMany({
        where: {
            userId: parseInt(friendId),
            friendId: parseInt(userId),
            status: 'Pending',
        },
        data: { status },
    });
};

const findFriendRelationship = async (userId, friendId) => {
    return await prisma.friends.findFirst({
        where: {
            OR: [
                { userId: parseInt(userId), friendId: parseInt(friendId) },
                { userId: parseInt(friendId), friendId: parseInt(userId) },
            ],
        },
    });
};

const updateFriendStatus = async (userId, friendId, status) => {
    return await prisma.$transaction([
        prisma.friends.update({
            where: { userId_friendId: { userId: parseInt(userId), friendId: parseInt(friendId) } },
            data: { status },
        }),
        prisma.friends.update({
            where: { userId_friendId: { userId: parseInt(friendId), friendId: parseInt(userId) } },
            data: { status },
        }),
    ]);
};

const findFriendsByStatus = async (userId, status) => {
    return await prisma.friends.findMany({
        where: { userId: parseInt(userId), status },
        include: {
            friend: { select: { id: true, username: true, email: true } },
        },
    });
};

const findPendingRequests = async (userId) => {
    return await prisma.friends.findMany({
        where: { friendId: parseInt(userId), status: 'Pending' },
        include: {
            user: { select: { id: true, username: true, email: true } },
        },
    });
};

const deleteFriendRelationship = async (userId, friendId) => {
    return await prisma.$transaction([
        prisma.friends.deleteMany({
            where: { userId: parseInt(userId), friendId: parseInt(friendId) },
        }),
        prisma.friends.deleteMany({
            where: { userId: parseInt(friendId), friendId: parseInt(userId) },
        }),
    ]);
};

module.exports = {
    createFriendRequest,
    updateFriendRequest,
    findFriendRelationship,
    updateFriendStatus,
    findFriendsByStatus,
    findPendingRequests,
    deleteFriendRelationship,
};
