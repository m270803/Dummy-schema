const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for user registration
router.post('/register', userController.createUser);

// Route for update 
router.put('/update', userController.updateUser);

module.exports = router;
