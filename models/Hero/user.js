const mongoose = require('mongoose');

// Define User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, ref: 'User' },
  // Add other fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
