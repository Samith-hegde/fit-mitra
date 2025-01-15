const prisma = require('../../config/prismaClient');

const findProgressByUserId = async (userId) => {
    return await prisma.progress.findMany({
        where: { userId: parseInt(userId) },
    });
};

const findProgressByUserIdWithinDateRange = async (userId, startDate, endDate) => {
    return await prisma.progress.findMany({
        where: {
            userId: parseInt(userId),
            date: {
                gte: new Date(startDate),
                lte: new Date(endDate),
            },
        },
    });
};

const findProgressRecordById = async (id) => {
    return await prisma.progress.findUnique({
        where: { id: parseInt(id) },
    });
};

const createProgress = async (userId, weight, personal_records) => {
    return await prisma.progress.create({
        data: {
            userId: parseInt(userId),
            date: new Date(),
            weight,
            personal_records,
        },
    });
};

const updateProgress = async (id, weight, personal_records) => {
    return await prisma.progress.update({
        where: { id: parseInt(id) },
        data: { weight, personal_records },
    });
};

const deleteProgress = async (id) => {
    return await prisma.progress.delete({
        where: { id: parseInt(id) },
    });
};

module.exports = {
    findProgressByUserId,
    findProgressByUserIdWithinDateRange,
    findProgressRecordById,
    createProgress,
    updateProgress,
    deleteProgress,
};
