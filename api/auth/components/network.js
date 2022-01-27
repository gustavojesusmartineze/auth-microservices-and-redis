const express = require('express');

const response = require('./../../../network/response');
const controller = require('./index');

const router = express.Router();

router.post('/login', login);

async function login(req, res) {
  try {
    const { username, password } = req.body;
    const data = await controller.login(username, password);

    response.success(req, res, data, 200)
  } catch (error) {
    response.error(req, res, 'Invalid information', 400);
  }
}

module.exports = router;
