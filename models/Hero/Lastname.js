const mongoose = require('mongoose');

// Define Works schema
const LastnameSchema = new mongoose.Schema({
  username: { type: String, required: true , ref: 'User'},
  firstname: { type: String, required: true }
});

const Lastname = mongoose.model('Lastname', LastnameSchema);

module.exports = Lastname;
