const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');

// POST request - Create a new resume entry
router.post('/', resumeController.createResume);

// GET request - Get resume by username
router.get('/:username', resumeController.getResumeByUsername);

// PUT request - Update resume by username
router.put('/:username', resumeController.updateResume);

module.exports = router;
