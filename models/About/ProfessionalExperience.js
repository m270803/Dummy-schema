const mongoose = require('mongoose');

// Define Professional Experience schema
const professionalExperienceSchema = new mongoose.Schema({
  username: { type: String, required: true },
  profession: { type: String, required: true },
  organization: { type: String, required: true },
  workfromhome: {type: String, required: true},
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, default: null },
  currentlyWorkinghere: {type: String, required: true},
  description: { type: String, default: null }
});

const ProfessionalExperience = mongoose.model('ProfessionalExperience', professionalExperienceSchema);

module.exports = ProfessionalExperience;
