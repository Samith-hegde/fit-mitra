const prisma = require('../../config/prismaClient');

const getExerciseById = async (req, res) => {
    const { id } = req.params;
    try {
        const exercise = await prisma.exercise.findUnique({
        where: {
            id: parseInt(id),
        },
        });
        res.json(exercise);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllExercises = async (req, res) => {
    try {
        const exercises = await prisma.exercise.findMany();
        res.json(exercises);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createExercise = async (req, res) => {
    const {
        name,
        description,
        muscle_group,
        is_custom,
    } = req.body;
    try {
        const newExercise = await prisma.exercise.create({
        data: {
            name,
            description,
            muscle_group,
            is_custom,
        },
        });
        res.json(newExercise);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
}

const updateExercise = async (req, res) => {
    const { id } = req.params;
    const {
        name,
        description,
        muscle_group,
        is_custom,
    } = req.body;
    try {
        const updatedExercise = await prisma.exercise.update({
        where: {
            id: parseInt(id),
        },
        data: {
            name,
            description,
            muscle_group,
            is_custom,
        },
        });
        res.json(updatedExercise);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteExercise = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedExercise = await prisma.exercise.delete({
        where: {
            id: parseInt(id),
        },
        });
        res.json(deletedExercise);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getExerciseById,
    getAllExercises,
    createExercise,
    updateExercise,
    deleteExercise,
};