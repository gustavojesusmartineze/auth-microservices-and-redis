const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('everything works');
});

module.exports = router;
