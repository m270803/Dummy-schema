const Skills = require('../models/About/Skills');

// Create a new skill
const createSkill = async (req, res) => {
  const { username, skill } = req.body;

  try {
    let userSkills = await Skills.findOne({ username });

    if (!userSkills) {
      userSkills = new Skills({ username, skills: [{ skill }] });
    } else {
      userSkills.skills.push({ skill });
    }

    await userSkills.save();
    res.status(201).json(userSkills);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Edit a specific skill
const editSkill = async (req, res) => {
  const { username, skillId, newSkill } = req.body;

  try {
    const userSkills = await Skills.findOneAndUpdate(
      { username, 'skills._id': skillId },
      { $set: { 'skills.$.skill': newSkill } },
      { new: true }
    );

    if (!userSkills) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.json(userSkills);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Remove a specific skill
const removeSkill = async (req, res) => {
  const { username, skillId } = req.body;

  try {
    const userSkills = await Skills.findOneAndUpdate(
      { username },
      { $pull: { skills: { _id: skillId } } },
      { new: true }
    );

    if (!userSkills) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.json(userSkills);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get skills by username
const getSkillsByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const userSkills = await Skills.findOne({ username });
    if (!userSkills) {
      return res.status(404).json({ message: 'Skills not found' });
    }
    res.json(userSkills);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createSkill,
  editSkill,
  removeSkill,
  getSkillsByUsername
};
