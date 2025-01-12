const registerQuery = require('../services/userService');

const postRegister = async (req, res) => {
  try {
    console.log("Request Body:", req.body); 
    const newUser = await registerQuery.createNewUser(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postRegister,
};

