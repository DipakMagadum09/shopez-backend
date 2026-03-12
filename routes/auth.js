const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, userType } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword, userType });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'shopez_secret_key', { expiresIn: '7d' });
    res.status(201).json({
      token,
      user: { _id: user._id, username: user.username, email: user.email, userType: user.userType }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'shopez_secret_key', { expiresIn: '7d' });
    res.json({
      token,
      user: { _id: user._id, username: user.username, email: user.email, userType: user.userType }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
