const express = require('express');
const router = express.Router();

const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const workoutRouter = require('./workoutRouter');
const exercisesRouter = require('./exercisesRouter');
const socialRouter = require('./socialRouter');

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/workout', workoutRouter);
router.use('/exercises', exercisesRouter);
router.use('/social', socialRouter);

module.exports = router;