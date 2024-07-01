const Lastname = require('../models/Hero/Lastname'); // Adjust the path to your Lastname model

// Create a new lastname
const createLastname = async (req, res) => {
  const { username, firstname } = req.body;

  try {
    const newLastname = new Lastname({ username, firstname });
    await newLastname.save();
    res.status(201).json(newLastname);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update lastname by username
const updateLastname = async (req, res) => {
  const { username, firstname } = req.body;

  try {
    const updatedLastname = await Lastname.findOneAndUpdate(
      { username },
      { firstname },
      { new: true }
    );

    if (!updatedLastname) {
      return res.status(404).json({ message: 'Lastname not found' });
    }

    res.json(updatedLastname);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get lastname by username
const getLastnameByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const lastname = await Lastname.findOne({ username });
    if (!lastname) {
      return res.status(404).json({ message: 'Lastname not found' });
    }
    res.json(lastname);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createLastname,
  updateLastname,
  getLastnameByUsername
};
