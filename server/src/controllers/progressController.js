const progressQueries = require('../services/progressService');

const getProgressByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const progress = await progressQueries.findProgressByUserId(userId);
        res.json(progress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProgressByUserIdWithinDateRange = async (req, res) => {
    const { userId, startDate, endDate } = req.params;
    try {
        const progress = await progressQueries.findProgressByUserIdWithinDateRange(
            userId,
            startDate,
            endDate
        );
        res.json(progress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProgressRecordById = async (req, res) => {
    const { id } = req.params;
    try {
        const progress = await progressQueries.findProgressRecordById(id);
        res.json(progress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createProgressRecord = async (req, res) => {
    const { userId, weight, personal_records } = req.body;
    try {
        const newProgress = await progressQueries.createProgress(
            userId,
            weight,
            personal_records
        );
        res.json(newProgress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateProgressRecord = async (req, res) => {
    const { id } = req.params;
    const { weight, personal_records } = req.body;
    try {
        const updatedProgress = await progressQueries.updateProgress(
            id,
            weight,
            personal_records
        );
        res.json(updatedProgress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteProgressRecord = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProgress = await progressQueries.deleteProgress(id);
        res.json(deletedProgress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getProgressByUserId,
    getProgressByUserIdWithinDateRange,
    getProgressRecordById,
    createProgressRecord,
    updateProgressRecord,
    deleteProgressRecord,
};
