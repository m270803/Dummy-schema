const express = require('express');
const router = express.Router();
const introductionController = require('../controllers/introductionController');

// Route for creating an introduction
router.post('/', introductionController.createIntroduction);

// Route for getting an introduction by username
router.get('/:username', introductionController.getIntroductionByUsername);

// updating intro 
router.put('/:username', introductionController.updateIntroduction);

module.exports = router;
