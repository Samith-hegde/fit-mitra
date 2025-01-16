const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authMiddleware');

const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const workoutRouter = require('./workoutRouter');
const exercisesRouter = require('./exercisesRouter');
const socialRouter = require('./socialRouter');
const friendsRouter = require('./friendsRouter');
const progressRouter = require('./progressRouter');

router.use('/auth', authRouter);
router.use('/users', authenticateToken, userRouter);
router.use('/workout', authenticateToken, workoutRouter);
router.use('/exercises', authenticateToken, exercisesRouter);
router.use('/social', authenticateToken, socialRouter);
router.use('/friends', authenticateToken, friendsRouter);
router.use('/progress', authenticateToken, progressRouter);

module.exports = router;