const prisma = require('../../config/prismaClient');

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma.users.findUnique({
        where: {
            id: parseInt(id),
        },
        exclude: { password: true },
        include: {
            Friends: {
                select: {
                    id: true,
                    friend_id: true,
                    username: true,
                },
            },
            CommunityPosts: {
                select: {
                    id: true,
                    title: true,
                    content: true,
                    post_type: true,
                    likes: true,
                    created_at: true,
                }
            },
        },
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.users.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createUser = async (req, res) => {
    const {
        username,
        email,
        password,
        bio,
        fitness_goals,
        date_of_birth,
        height,
        weight
    } = req.body;
    try {
        const newUser = await prisma.users.create({
        data: {
            username,
            email,
            password,
            bio,
            fitness_goals,
            date_of_birth,
            height,
            weight
        },
        });
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { 
        username,
        email,
        password,
        bio,
        fitness_goals,
        date_of_birth,
        height,
        weight,
        updated_at,
        is_admin
     } = req.body;
    try {
        const updatedUser = await prisma.users.update({
        where: {
            id: parseInt(id),
        },
        data: {
            username,
            email,
            password,
            bio,
            fitness_goals,
            date_of_birth,
            height,
            weight,
            updated_at,
            is_admin
        },
        });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.users.delete({
        where: {
            id: parseInt(id),
        },
        });
        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };