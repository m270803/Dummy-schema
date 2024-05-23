const mongoose = require('mongoose');

// Define Bio schema
const bioSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  bio: { type: String, default: null }
});

const Bio = mongoose.model('Bio', bioSchema);

module.exports = Bio;
