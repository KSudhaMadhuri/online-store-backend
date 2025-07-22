const express = require('express');
const router = express.Router();

// Placeholder auth routes
router.get('/', (req, res) => {
  res.json({ message: 'Auth routes working' });
});

router.post('/register', (req, res) => {
  res.json({ message: 'Register endpoint' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login endpoint' });
});

module.exports = router;