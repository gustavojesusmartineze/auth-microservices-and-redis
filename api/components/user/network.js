const express = require('express');

const secure = require('./secure');
const response = require('./../../../network/response');
const controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);
router.get('/:id', get);
router.post('/', create);
router.put('/:id',
  secure('update'),
  update
);

async function list (req, res, next) {
  try {
    const data = await controller.list();
    response.success(req, res, data, 200);
  } catch (error) {
    next();
  }
}

async function get(req, res, next) {
    try {
    const { id } = req.params;
    const user = await controller.get(id);

    response.success(req, res, user, 200);
  } catch (error) {
    next();
  }
}

async function create(req, res, next) {
    try {
    const body  = req.body;
    const user = await controller.upsert(body);

    response.success(req, res, user, 200);
  } catch (error) {
    next();
  }
}

async function update(req, res, next) {
  try {
    const body  = req.body;
    const user = await controller.upsert(body);

    response.success(req, res, user, 200);
  } catch (error) {
    next();
  }
}

module.exports = router;
