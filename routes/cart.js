const express = require('express');
const router = express.Router();

// Placeholder cart routes
router.get('/', (req, res) => {
  res.json({ message: 'Cart routes working' });
});

module.exports = router;