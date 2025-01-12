const express = require('express');
const router = express.Router();

const authRouter = require('./authRouter');
const dashboardRouter = require('./dashboardRouter');
const userRouter = require('./userRouter');
const workoutRouter = require('./workoutRouter');
const exercisesRouter = require('./exercisesRouter');
const socialRouter = require('./socialRouter');

router.use('/', authRouter);
router.use('/dashboard', dashboardRouter);
router.use('/user', userRouter);
router.use('/workout', workoutRouter);
router.use('/exercises', exercisesRouter);
router.use('/social', socialRouter);

module.exports = router;