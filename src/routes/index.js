const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  res.send('<html><body><h1>Hello World</h1></body></html>');
});
module.exports = router;