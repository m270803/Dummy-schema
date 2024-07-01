const mongoose = require('mongoose');

// Define Introduction schema
const introductionSchema = new mongoose.Schema({
  username: { type: String, required: true, ref: 'User' },
  introduction: { type: String, default: null }
});

// Ensure username is unique
introductionSchema.index({ username: 1 }, { unique: true });

const Introduction = mongoose.model('Introduction', introductionSchema);

module.exports = Introduction;
