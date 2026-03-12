const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Order = require('../models/Order');
const { protect, adminOnly } = require('../middleware/auth');

// Get all users (admin)
router.get('/', protect, adminOnly, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user profile
router.get('/profile', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    const orderCount = await Order.countDocuments({ userId: req.user._id });
    res.json({ ...user._doc, orderCount });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get stats (admin dashboard)
router.get('/stats', protect, adminOnly, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ userType: 'customer' });
    res.json({ totalUsers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
