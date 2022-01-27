const express = require('express');

const response = require('./../../../network/response');
const controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);
router.get('/:id', get);
router.post('/', create);


async function list (req, res) {
  try {
    const data = await controller.list();
    response.success(req, res, data, 200);
  } catch (error) {
    response.error(req, res, error.message, 500)
  }
}

async function get(req, res) {
    try {
    const { id } = req.params;
    const user = await controller.get(id);

    response.success(req, res, user, 200);
  } catch (error) {
    response.error(req, res, error.message, 500)
  }
}

async function create(req, res) {
    try {
    const body  = req.body;
    const user = await controller.upsert(body);

    response.success(req, res, user, 200);
  } catch (error) {
    response.error(req, res, error.message, 500)
  }
}

module.exports = router;
