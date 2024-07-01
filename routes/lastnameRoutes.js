const express = require('express');
const router = express.Router();
const LastnameController = require('../controllers/lastnameController'); // Adjust the path to your controller file

// Route for creating a lastname
router.post('/', LastnameController.createLastname);

// Route for updating a lastname
router.put('/:username', LastnameController.updateLastname);

// Route for getting lastname by username
router.get('/:username', LastnameController.getLastnameByUsername);

module.exports = router;
