const Title = require('../models/Hero/Title');

// Create a new title
const createTitle = async (req, res) => {
  const { username, title } = req.body;

  try {
    let userTitle = await Title.findOne({ username });

    if (!userTitle) {
      userTitle = new Title({ username, titles: [{ title }] });
    } else {
      userTitle.titles.push({ title });
    }

    await userTitle.save();
    res.status(201).json(userTitle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Edit a specific title
const editTitle = async (req, res) => {
  const { username, titleId, newTitle } = req.body;

  try {
    const userTitle = await Title.findOneAndUpdate(
      { username, 'titles._id': titleId },
      { $set: { 'titles.$.title': newTitle } },
      { new: true }
    );

    if (!userTitle) {
      return res.status(404).json({ message: 'Title not found' });
    }

    res.json(userTitle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Remove a specific title
const removeTitle = async (req, res) => { // we are only getting a title id so find the title by id only
  const { username, titleId } = req.body;

  try {
    const userTitle = await Title.findOneAndUpdate(
      { username },
      { $pull: { titles: { _id: titleId } } },
      { new: true }
    );

    if (!userTitle) {
      return res.status(404).json({ message: 'Title not found' });
    }

    res.json(userTitle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get titles by username
const getTitleByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const userTitle = await Title.findOne({ username });
    if (!userTitle) {
      return res.status(404).json({ message: 'Titles not found' });
    }
    res.json(userTitle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createTitle,
  editTitle,
  removeTitle,
  getTitleByUsername
};
