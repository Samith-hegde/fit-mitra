const prisma = require('../../config/prismaClient');

const getProgressByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const progress = await prisma.progress.findMany({
        where: {
            userId: parseInt(userId),
        },
        });
        res.json(progress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getProgressByUserIdWithinDateRange = async (req, res) => {
    const { userId, startDate, endDate } = req.params;
    try {
        const progress = await prisma.progress.findMany({
        where: {
            userId: parseInt(userId),
            date: {
                gte: new Date(startDate),
                lte: new Date(endDate),
            },
        },
        });
        res.json(progress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getProgressRecordById = async (req, res) => {
    const { id } = req.params;
    try {
        const progress = await prisma.progress.findUnique({
        where: {
            id: parseInt(id),
        },
        });
        res.json(progress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createProgressRecord = async (req, res) => {
    const {
        userId,
        weight,
        personal_records,
    } = req.body;
    try {
        const newProgress = await prisma.progress.create({
        data: {
            userId: parseInt(userId),
            date: new Date(),
            weight,
            personal_records,
        },
        });
        res.json(newProgress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateProgressRecord = async (req, res) => {
    const { id } = req.params;
    const {
        weight,
        personal_records,
    } = req.body;
    try {
        const updatedProgress = await prisma.progress.update({
        where: {
            id: parseInt(id),
        },
        data: {
            weight,
            personal_records,
        },
        });
        res.json(updatedProgress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteProgressRecord = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProgress = await prisma.progress.delete({
        where: {
            id: parseInt(id),
        },
        });
        res.json(deletedProgress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getProgressByUserId,
    getProgressByUserIdWithinDateRange,
    getProgressRecordById,
    createProgressRecord,
    updateProgressRecord,
    deleteProgressRecord,
};

