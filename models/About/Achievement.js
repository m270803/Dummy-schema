const mongoose = require('mongoose');

// Define Achievement schema
const achievementSchema = new mongoose.Schema({
  username: { type: String, required: true },
  achievement: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, default: null }
});

const Achievement = mongoose.model('Achievement', achievementSchema);

module.exports = Achievement;
