const mongoose = require('mongoose');

// Define Service Description schema
const serviceDescriptionSchema = new mongoose.Schema({
  username: { type: String, required: true },
  serviceName: { type: String, required: true },
  description: { type: String, required: true }
});

const ServiceDescription = mongoose.model('ServiceDescription', serviceDescriptionSchema);

module.exports = ServiceDescription;
