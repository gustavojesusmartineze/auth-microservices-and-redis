const express = require('express');

const response = require('./../../../network/response');
const controller = require('./index');

const router = express.Router();

router.get('/', (req, res) => {
  const data = controller.list();
  response.success(req, res, data, 200);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = controller.get(id);

  response.success(req, res, user, 200);
});

module.exports = router;
