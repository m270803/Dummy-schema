const express = require('express');
const router = express.Router();
const worksController = require('../controllers/worksController');

// Route for creating a work
router.post('/', worksController.createWork);

// Route for getting works by username
router.get('/:username', worksController.getWorksByUsername);

// update Work
router.post('/:username', worksController.updateWork);

module.exports = router;
