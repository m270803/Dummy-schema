const mongoose = require('mongoose');

// Define Bio schema
const resumeSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  resume: { type: String, default: null }
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
