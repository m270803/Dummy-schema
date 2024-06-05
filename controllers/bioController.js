const Bio = require('../models/About/Bio');

const createOrUpdateBio = async (req, res) => {
  const { username, bio } = req.body;

  try {
    const userBio = await Bio.findOneAndUpdate(
      { username },
      { bio },
      { new: true, upsert: true } // Create a new doc if not found
    );
    res.status(201).json(userBio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBioByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const userBio = await Bio.findOne({ username });
    if (!userBio) {
      return res.status(404).json({ message: 'Bio not found' });
    }
    res.json(userBio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createOrUpdateBio,
  getBioByUsername
};
