const mongoose = require('mongoose');

// Define Works schema
const ProfileSchema = new mongoose.Schema({
  username: { type: String, required: true, ref: 'User' },
  profile: { type: String, required: true }
});

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = ProfileSchema;
