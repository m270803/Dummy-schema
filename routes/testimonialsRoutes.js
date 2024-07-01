const express = require('express');
const router = express.Router();
const TestimonialsController = require('../controllers/testimonialsController');

// Route for creating a work
router.post('/', TestimonialsController.createWork);

// Route for getting Testimonials by username
router.get('/:username', TestimonialsController.getTestimonialsByUsername);

// updateTestimonial
router.put('/:username', TestimonialsController.updateTestimonial);

module.exports = router;
