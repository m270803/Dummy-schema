const mongoose = require('mongoose');

// Define Works schema
const FirstnameSchema = new mongoose.Schema({
  username: { type: String, required: true, ref: 'User' },
  firstname: { type: String, required: true }
});

const Firstname = mongoose.model('Firstname', FirstnameSchema);

module.exports = Firstname;