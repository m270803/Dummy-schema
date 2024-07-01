const ServiceDescription = require('../models/Services/ServiceDescription');

// Create a new service description
const createServiceDescription = async (req, res) => {
  const { username, serviceName, description } = req.body;

  try {
    const newServiceDescription = new ServiceDescription({ username, serviceName, description });
    await newServiceDescription.save();
    res.status(201).json(newServiceDescription);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get service descriptions by username
const getServiceDescriptionsByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const serviceDescriptions = await ServiceDescription.find({ username });
    if (!serviceDescriptions.length) {
      return res.status(404).json({ message: 'Service descriptions not found' });
    }
    res.json(serviceDescriptions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a service description
const updateServiceDescription = async (req, res) => {
  const { id, serviceName, description } = req.body;

  try {
    const updatedServiceDescription = await ServiceDescription.findByIdAndUpdate(
      id,
      { serviceName, description },
      { new: true }
    );

    if (!updatedServiceDescription) {
      return res.status(404).json({ message: 'Service description not found' });
    }

    res.json(updatedServiceDescription);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createServiceDescription,
  getServiceDescriptionsByUsername,
  updateServiceDescription
};
