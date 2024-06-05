const Testimonials = require('../models/Testimonials/Testimonials');

// Create a new work
const createWork = async (req, res) => {
  const { username, serviceName, photo, description } = req.body;

  try {
    const newWork = new Testimonials({ username, serviceName, photo, description });
    await newWork.save();
    res.status(201).json(newWork);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Testimonials by username
const getTestimonialsByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const Testimonials = await Testimonials.find({ username });
    if (!Testimonials.length) {
      return res.status(404).json({ message: 'Testimonials not found' });
    }
    res.json(Testimonials);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createWork,
  getTestimonialsByUsername
};
