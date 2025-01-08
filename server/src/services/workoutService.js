const prisma = require('../../config/prismaClient');

const getWorkoutById = async (req, res) => {
    const { id } = req.params;
    try {
        const workout = await prisma.workout.findUnique({
        where: {
            id: parseInt(id),
        },
        include: {
            Exercises: {
                select: {
                    exercise_id: true,
                    sets: true,
                    reps: true,
                    distance: true,
                    duration: true,
                    weight: true,
                },
                include: {
                    exercise: {
                        select: {
                            name: true,
                            muscle_group: true,
                            description: true,
                        }
                    }
                }
            }
        }
        })
        res.json(workout);
    } catch (error) {
        res.status(500).json({ error: error.message });
}};

const getAllWorkouts = async (req, res) => {
    try {
        const workouts = await prisma.workout.findMany();
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createWorkout = async (req, res) => {
    const {
        user_id,
        title,
        date,
        duration,
        notes,
        isTemplated,
        Exercises
    } = req.body;
    try {
        const newWorkout = await prisma.workout.create({
        data: {
            user_id,
            title,
            date,
            duration,
            notes,
            isTemplated,
            Exercises: {
                create: Exercises
            }
        }
        });
        res.json(newWorkout);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateWorkout = async (req, res) => {
    const { id } = req.params;
    const {
        user_id,
        title,
        date,
        duration,
        notes,
        isTemplated,
        Exercises
    } = req.body;
    try {
        const updatedWorkout = await prisma.workout.update({
            where: {
                id: parseInt(id),
            },
            data: {
                user_id,
                title,
                date,
                duration,
                notes,
                isTemplated,
                Exercises: {
                    create: Exercises
                }
            },
        });
        res.json(updatedWorkout);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedWorkout = await prisma.workout.delete({
            where: {
                id: parseInt(id),
            },
        });
        res.json(deletedWorkout);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getWorkoutById,
    getAllWorkouts,
    createWorkout,
    updateWorkout,
    deleteWorkout,
};