const mongoose = require('mongoose');

// Define schema for additional data
const additionalDataSchema = new mongoose.Schema({
  age: { type: Number, default: null },
  email: { type: String, default: null },
  // Add other fields as needed
}, { _id: false }); // Set _id to false to prevent Mongoose from automatically creating an _id field

// Define user schema
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  additionalData: { type: additionalDataSchema, default: null }, // Make additionalData optional
  // Define other fields of your user schema here
});

// Define User model
const User = mongoose.model('User', userSchema);

module.exports = User;
