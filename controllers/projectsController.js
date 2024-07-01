const Works = require('../models/Work/Projects'); // Adjust the path to your Works model

// Create a new work
const createWork = async (req, res) => {
  const { username, projectname, skill, photo, description } = req.body;

  try {
    const newWork = new Works({ username, projectname, skill, photo, description });
    await newWork.save();
    res.status(201).json(newWork);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get works by username
const getWorksByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const works = await Works.find({ username });
    if (!works.length) {
      return res.status(404).json({ message: 'Works not found' });
    }
    res.json(works);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a work
const updateWork = async (req, res) => {
  const { id, projectname, skill, photo, description } = req.body;

  try {
    const updatedWork = await Works.findByIdAndUpdate(
      id,
      { projectname, skill, photo, description },
      { new: true }
    );

    if (!updatedWork) {
      return res.status(404).json({ message: 'Work not found' });
    }

    res.json(updatedWork);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createWork,
  getWorksByUsername,
  updateWork
};
