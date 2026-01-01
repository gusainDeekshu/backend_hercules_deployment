const Contact = require('../models/Contact');

// @desc    Create a new contact (Public Website)
// @route   POST /api/contact
exports.createContact = async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get all inquiries (Admin Panel)
// @route   GET /api/inquiries
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update status (Admin Panel)
// @route   PUT /api/inquiries/:id
exports.updateContactStatus = async (req, res) => {
  const { status } = req.body;
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id, 
      { status }, 
      { new: true }
    );
    res.json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};