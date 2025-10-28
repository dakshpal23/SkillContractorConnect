const express = require('express');
const router = express.Router();

// @desc    Test API endpoint
// @route   GET /api/test
// @access  Public
router.get('/test', (req, res) => {
  res.json({ message: 'API is working' });
});

module.exports = router;