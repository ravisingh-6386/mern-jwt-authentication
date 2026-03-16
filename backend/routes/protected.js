const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const User = require('../models/User');

// @route  GET /api/protected/dashboard
// @desc   Protected dashboard data
// @access Private
router.get('/dashboard', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json({
      message: `Welcome to your dashboard, ${user.name}!`,
      user: { id: user._id, name: user.name, email: user.email },
      stats: {
        accountCreated: user.createdAt,
        lastAccessed: new Date(),
      },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
