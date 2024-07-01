const Firstname = require('../models/Hero/Firstname'); // Adjust the path to your Firstname model

// Create a new firstname entry
const createFirstname = async (req, res) => {
  const { username, firstname } = req.body;

  try {
    const newFirstname = new Firstname({ username, firstname });
    await newFirstname.save();
    res.status(201).json(newFirstname);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update firstname by username
const updateFirstname = async (req, res) => {
  const { username, firstname } = req.body;

  try {
    const updatedFirstname = await Firstname.findOneAndUpdate(
      { username },
      { firstname },
      { new: true }
    );

    if (!updatedFirstname) {
      return res.status(404).json({ message: 'Firstname not found' });
    }

    res.json(updatedFirstname);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get firstname by username
const getFirstnameByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const firstname = await Firstname.findOne({ username });
    if (!firstname) {
      return res.status(404).json({ message: 'Firstname not found' });
    }
    res.json(firstname);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createFirstname,
  updateFirstname,
  getFirstnameByUsername
};
