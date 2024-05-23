const express = require('express');
const router = express.Router();
const titleController = require('../controllers/titleController');

// Route for creating a title
router.post('/create', titleController.createTitle);

// Route for editing a specific title
router.put('/edit', titleController.editTitle);

// Route for removing a specific title
router.delete('/remove', titleController.removeTitle);

// Route for getting titles by username
router.get('/:username', titleController.getTitleByUsername);

module.exports = router;
