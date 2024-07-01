const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/profileController'); // Adjust the path to your controller file

// Route for creating a profile
router.post('/', ProfileController.createProfile);

// Route for updating a profile
router.put('/:username', ProfileController.updateProfile);

// Route for getting profile by username
router.get('/:username', ProfileController.getProfileByUsername);

module.exports = router;
