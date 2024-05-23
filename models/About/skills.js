const mongoose = require('mongoose');

// Define subdocument schema for individual skills
const individualSkillSchema = new mongoose.Schema({
  skill: { type: String, required: true }
}, { _id: true });

// Define main Skills schema
const skillsSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  skills: [individualSkillSchema]
});

const Skills = mongoose.model('Skills', skillsSchema);

module.exports = Skills;
