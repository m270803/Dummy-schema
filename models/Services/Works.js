const mongoose = require('mongoose');

// Define Works schema
const worksSchema = new mongoose.Schema({
  username: { type: String, required: true },
  serviceName: { type: String, required: true },
  photo: { type: String, required: true }, // Assuming photo is a URL to the image
  description: { type: String, required: true }
});

const Works = mongoose.model('Works', worksSchema);

module.exports = Works;
