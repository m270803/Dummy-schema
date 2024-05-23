const express = require('express');
const router = express.Router();
const achievementController = require('../controllers/achievementController');

// Route for creating an achievement
router.post('/', achievementController.createAchievement);

// Route for updating an achievement
router.put('/', achievementController.updateAchievement);

// Route for deleting an achievement
router.delete('/', achievementController.deleteAchievement);

// Route for getting achievements by username
router.get('/:username', achievementController.getAchievementsByUsername);

module.exports = router;
