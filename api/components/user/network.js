const express = require('express');

const response = require('./../../../network/response');

const router = express.Router();

router.get('/', (req, res) => {
  response.success(req, res, 'Everything works', 200);
});

module.exports = router;
