const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Route for creating or updating contact information
router.post('/', contactController.createOrUpdateContact);

// Route for getting contact information by username
router.get('/:username', contactController.getContactByUsername);

module.exports = router;
