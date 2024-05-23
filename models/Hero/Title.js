const mongoose = require('mongoose');

// Define subdocument schema for individual titles
const individualTitleSchema = new mongoose.Schema({
  title: { type: String, required: true }
}, { _id: true });

// Define main Title schema
const titleSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  titles: [individualTitleSchema]
});

const Title = mongoose.model('Title', titleSchema);

module.exports = Title;
