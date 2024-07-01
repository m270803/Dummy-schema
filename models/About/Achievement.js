const mongoose = require('mongoose');

// Define Achievement schema
const achievementSchema = new mongoose.Schema({
  username: { type: String, required: true },
  achievement: { type: String, required: true }
});

const Achievement = mongoose.model('Achievement', achievementSchema);

module.exports = Achievement;
