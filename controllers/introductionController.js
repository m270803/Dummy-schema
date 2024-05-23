const Introduction = require('../models/Hero/Introduction');

const createIntroduction = async (req, res) => {
  const { username, introduction } = req.body;

  try {
    const newIntroduction = new Introduction({ username, introduction });
    await newIntroduction.save();
    res.status(201).json(newIntroduction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getIntroductionByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const introduction = await Introduction.findOne({ username });
    if (!introduction) {
      return res.status(404).json({ message: 'Introduction not found' });
    }
    res.json(introduction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createIntroduction,
  getIntroductionByUsername
};
