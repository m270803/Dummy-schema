const User = require('../models/Hero/user');

const createUser = async (req, res) => {
  const { username } = req.body; // Assuming you get the username from the request body

  try {
    // Create the user with the provided username and null additionalData
    const newUser = new User({ username, additionalData: null });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser
};
