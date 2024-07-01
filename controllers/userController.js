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

const updateUser = async (req, res) => {
  const { id } = req.params; // Assuming you get the user ID from the request parameters
  const { username, additionalData } = req.body; // Assuming you get the updated data from the request body

  try {
    const user = await User.findById(id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the user's fields
    if (username) user.username = username;
    if (additionalData) user.additionalData = additionalData;

    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  updateUser
};
