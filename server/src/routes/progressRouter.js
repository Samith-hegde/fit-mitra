const express = require('express');
const router = express.Router();

const {
    getProgressByUserId,
    getProgressByUserIdWithinDateRange,
    getProgressRecordById,
    createProgressRecord,
    updateProgressRecord,
    deleteProgressRecord,
} = require('../controllers/progressController');

router.get('/getProgress/:userId', getProgressByUserId);
router.get('/getProgress/:userId/:startDate/:endDate', getProgressByUserIdWithinDateRange);
router.get('/getProgressRecord/:id', getProgressRecordById);
router.post('/createProgress', createProgressRecord);
router.put('/updateProgress/:id', updateProgressRecord);
router.delete('/deleteProgress/:id', deleteProgressRecord);