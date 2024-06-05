const Achievement = require('../models/About/Achievement');

const createAchievement = async (req, res) => {
  const { username, achievement, date, description } = req.body;

  try {
    const newAchievement = new Achievement({ username, achievement, date, description });
    await newAchievement.save();
    res.status(201).json(newAchievement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateAchievement = async (req, res) => {
  const { id, achievement, date, description } = req.body;

  try {
    const updatedAchievement = await Achievement.findByIdAndUpdate(
      id,
      { achievement, date, description },
      { new: true }
    );

    if (!updatedAchievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }

    res.json(updatedAchievement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteAchievement = async (req, res) => {
  const { id } = req.body;

  try {
    const deletedAchievement = await Achievement.findByIdAndDelete(id);

    if (!deletedAchievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }

    res.json({ message: 'Achievement deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAchievementsByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const achievements = await Achievement.find({ username });
    if (!achievements.length) {
      return res.status(404).json({ message: 'Achievements not found' });
    }
    res.json(achievements);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createAchievement,
  updateAchievement,
  deleteAchievement,
  getAchievementsByUsername
};
