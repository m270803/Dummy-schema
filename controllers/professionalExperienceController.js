const ProfessionalExperience = require('../models/About/ProfessionalExperience');

const createProfessionalExperience = async (req, res) => {
  const { username, profession, organization, location, startDate, endDate, description } = req.body;

  try {
    const newExperience = new ProfessionalExperience({ username, profession, organization, location, startDate, endDate, description });
    await newExperience.save();
    res.status(201).json(newExperience);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateProfessionalExperience = async (req, res) => {
  const { id, profession, organization, location, startDate, endDate, description } = req.body;

  try {
    const updatedExperience = await ProfessionalExperience.findByIdAndUpdate(
      id,
      { profession, organization, location, startDate, endDate, description },
      { new: true }
    );

    if (!updatedExperience) {
      return res.status(404).json({ message: 'Professional experience not found' });
    }

    res.json(updatedExperience);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteProfessionalExperience = async (req, res) => {
  const { id } = req.body;

  try {
    const deletedExperience = await ProfessionalExperience.findByIdAndDelete(id);

    if (!deletedExperience) {
      return res.status(404).json({ message: 'Professional experience not found' });
    }

    res.json({ message: 'Professional experience deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProfessionalExperiencesByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const experiences = await ProfessionalExperience.find({ username });
    if (!experiences.length) {
      return res.status(404).json({ message: 'Professional experiences not found' });
    }
    res.json(experiences);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createProfessionalExperience,
  updateProfessionalExperience,
  deleteProfessionalExperience,
  getProfessionalExperiencesByUsername
};
