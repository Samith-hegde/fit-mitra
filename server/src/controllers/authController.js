const registerQuery = require('../services/userService');

const postRegister = async (req, res) => {
  try {
    const newUser = await registerQuery.createNewUser(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postRegister,
};

