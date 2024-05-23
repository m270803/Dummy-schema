const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skillsController');

// Route for creating a skill
router.post('/create', skillsController.createSkill);

// Route for editing a specific skill
router.put('/edit', skillsController.editSkill);

// Route for removing a specific skill
router.delete('/remove', skillsController.removeSkill);

// Route for getting skills by username
router.get('/:username', skillsController.getSkillsByUsername);

module.exports = router;
