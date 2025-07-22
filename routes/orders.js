const express = require('express');
const router = express.Router();

// Placeholder order routes
router.get('/', (req, res) => {
  res.json({ message: 'Orders routes working' });
});

module.exports = router;