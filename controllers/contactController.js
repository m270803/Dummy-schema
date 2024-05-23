const Contact = require('../models/Contact');

// Create or update contact information
const createOrUpdateContact = async (req, res) => {
  const { username, email, instagram, linkedIn, twitter, message } = req.body;

  try {
    let contact = await Contact.findOne({ username });

    if (!contact) {
      // If contact does not exist, create a new one
      contact = new Contact({ username, email, instagram, linkedIn, twitter, message });
    } else {
      // If contact exists, update the fields
      contact.email = email;
      contact.instagram = instagram;
      contact.linkedIn = linkedIn;
      contact.twitter = twitter;
      contact.message = message;
    }

    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get contact information by username
const getContactByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const contact = await Contact.findOne({ username });
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createOrUpdateContact,
  getContactByUsername
};
