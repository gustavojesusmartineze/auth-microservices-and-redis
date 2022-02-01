const express = require('express');

const response = require('./../../../network/response');
const controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);

async function list (req, res, next) {
  try {
    const data = await controller.list();
    response.success(req, res, data, 200);
  } catch (error) {
    next(error, req, res);
  }
}

module.exports = router;
