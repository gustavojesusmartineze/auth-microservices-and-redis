const express = require('express');

const response = require('./../../../network/response');
const auth = require('./secure');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);
router.get('/:id', get);
router.post('/', auth('add'), create);

async function list (req, res, next) {
  try {
    const data = await Controller.list();
    response.success(req, res, data, 200);
  } catch (error) {
    next(error, req, res);
  }
}

async function get(req, res, next) {
    try {
    const { id } = req.params;
    const user = await Controller.get(id);

    response.success(req, res, user, 200);
  } catch (error) {
    next(error, req, res);
  }
}

async function create(req, res, next) {
  try {
    const body  = req.body;
    const post = await Controller.create(body, req.user.id);

    response.success(req, res, post, 201);
  } catch (error) {
    next(error, req, res);
  }
}

module.exports = router;
