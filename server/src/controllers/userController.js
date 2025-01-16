const userQueries = require('../services/userService');

const getUserById = async (req, res) => {
  console.log('Request Params:', req.params);
  const { id } = req.params;
  console.log('ID:', id);
  try {
    const user = await userQueries.findUserById(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userQueries.findAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    console.log('Request Body:', req.body);
    const updatedUser = await userQueries.updateExistingUser(id, req.body);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await userQueries.deleteUserById(id);
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
