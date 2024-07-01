const Testimonials = require('../models/Testimonials/Testimonials');

// Create a new work
const createWork = async (req, res) => {
  const { username, serviceName, organizationName, photo, description } = req.body;

  try {
    const newWork = new Testimonials({ username, serviceName, organizationName, photo, description });
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
    const testimonials = await Testimonials.find({ username });
    if (!testimonials.length) {
      return res.status(404).json({ message: 'Testimonials not found' });
    }
    res.json(testimonials);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a testimonial
const updateTestimonial = async (req, res) => {
  const { id, serviceName, organizationName, photo, description } = req.body;

  try {
    const updatedTestimonial = await Testimonials.findByIdAndUpdate(
      id,
      { serviceName, organizationName, photo, description },
      { new: true }
    );

    if (!updatedTestimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    res.json(updatedTestimonial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createWork,
  getTestimonialsByUsername,
  updateTestimonial
};
