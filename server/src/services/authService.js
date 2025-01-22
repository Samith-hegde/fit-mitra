const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

const register = async (userData) => {
    const { 
        username, 
        password, 
        email,
        bio,
        fitness_goals,  
        date_of_birth, 
        height,         
        weight,               
    } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
        data: {
        username,
        password: hashedPassword,
        email,
        bio,
        fitness_goals,  
        date_of_birth: (new Date(date_of_birth)),
        height: parseFloat(height),         
        weight: parseFloat(weight),               
        },
    });

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' });
    return { user, token };
};

const login = async (username, password) => {
    const user = await prisma.users.findUnique({ where: { username } });
    if (!user) {
        throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' });
    return { user, token };
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        throw new Error('Invalid token');
    }
};

module.exports = {
    register,
    login,
    verifyToken,
};