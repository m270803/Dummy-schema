const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const titleRoutes = require('./routes/titleRoutes');
const introductionRoutes = require('./routes/introductionRoutes');
const bioRoutes = require('./routes/bioRoutes');
const skillsRoutes = require('./routes/skillsRoutes');
const professionalExperienceRoutes = require('./routes/professionalExperienceRoutes');
const achievementRoutes = require('./routes/achievementRoutes');
const serviceDescriptionRoutes = require('./routes/serviceDescriptionRoutes');
const testimonialsRoutes = require('./routes/testimonialsRoutes');
const worksRoutes = require('./routes/worksRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/Hero/users', userRoutes);
app.use('/api/Hero/titles', titleRoutes);
app.use('/api/Hero/introduction', introductionRoutes);
app.use('/api/About/bio', bioRoutes);
app.use('/api/About/skills', skillsRoutes);
app.use('/api/About/professional-experience', professionalExperienceRoutes);
app.use('/api/About/achievements', achievementRoutes);
app.use('/api/Services/service-description', serviceDescriptionRoutes);
app.use('/api/Services/works', worksRoutes); 
app.use('/api/testimonials', testimonialsRoutes); 
app.use('/api/contact', contactRoutes); // Include new route for contact

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
