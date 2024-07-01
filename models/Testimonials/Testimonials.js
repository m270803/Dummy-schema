const mongoose = require('mongoose');

// Define Works schema
const TestimonialsSchema = new mongoose.Schema({
  username: { type: String, required: true, ref: 'User' },
  serviceName: { type: String, required: true },
  organizationName: { type: String, required: true },
  photo: { type: String, required: true }, // Assuming photo is a URL to the image
  description: { type: String, required: true }
});

const Works = mongoose.model('Testimonials', TestimonialsSchema);

module.exports = TestimonialsSchema;
