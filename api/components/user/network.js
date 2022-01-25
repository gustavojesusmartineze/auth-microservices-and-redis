const express = require('express');

const response = require('./../../../network/response');
const controller = require('./index');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await controller.list();
    response.success(req, res, data, 200);
  } catch (error) {
    response.error(req, res, error.message, 500)
  }
});

router.get('/:id', async (req, res) => {
    try {
    const { id } = req.params;
    const user = await controller.get(id);

    response.success(req, res, user, 200);
  } catch (error) {
    response.error(req, res, error.message, 500)
  }
});

module.exports = router;
