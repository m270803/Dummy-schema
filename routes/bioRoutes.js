const express = require('express');
const router = express.Router();
const bioController = require('../controllers/bioController');

// Route for creating or updating bio
router.post('/', bioController.createOrUpdateBio);

// Route for getting bio by username
router.get('/:username', bioController.getBioByUsername);

module.exports = router;
