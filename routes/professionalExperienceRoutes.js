const express = require('express');
const router = express.Router();
const professionalExperienceController = require('../controllers/professionalExperienceController');

// Route for creating a professional experience
router.post('/', professionalExperienceController.createProfessionalExperience);

// Route for updating a professional experience
router.put('/', professionalExperienceController.updateProfessionalExperience);

// Route for deleting a professional experience
router.delete('/', professionalExperienceController.deleteProfessionalExperience);

// Route for getting professional experiences by username
router.get('/:username', professionalExperienceController.getProfessionalExperiencesByUsername);

module.exports = router;
