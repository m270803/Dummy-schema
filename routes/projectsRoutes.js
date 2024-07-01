const express = require('express');
const router = express.Router();
const WorksController = require('../controllers/projectsController'); // Adjust the path to your controller file

// Route for creating a work
router.post('/', WorksController.createWork);

// Route for getting works by username
router.get('/:username', WorksController.getWorksByUsername);

// Route for updating a work
router.put('/:username', WorksController.updateWork);

module.exports = router;
