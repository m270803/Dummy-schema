const Resume = require('../models/About/Resume'); // Adjust the path to your resume model
const multer = require('multer');
const path = require('path');

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/resumes'); // Specify the upload directory
  },
  filename: (req, file, cb) => {
    cb(null, `${req.body.username}-${Date.now()}${path.extname(file.originalname)}`); // Rename the file
  }
});

const upload = multer({ storage: storage }).single('resume');

// Create a new resume entry
const createResume = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const { username } = req.body;
    const resume = req.file ? req.file.path : null;

    try {
      const newResume = new Resume({ username, resume });
      await newResume.save();
      res.status(201).json(newResume);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
};

// Update an existing resume entry
const updateResume = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const { username } = req.body;
    const resume = req.file ? req.file.path : null;

    try {
      const updatedResume = await Resume.findOneAndUpdate(
        { username },
        { resume },
        { new: true }
      );

      if (!updatedResume) {
        return res.status(404).json({ message: 'Resume not found' });
      }

      res.json(updatedResume);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
};

// Get resume by username
const getResumeByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const resume = await Resume.findOne({ username });
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }
    res.json(resume);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createResume,
  updateResume,
  getResumeByUsername
};
