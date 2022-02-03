const express = require('express');

const response = require('../network/response');
const Store = require('../store/mysql');

const router = express.Router();

router.get('/:table', list);
router.get('/:table/:id', get);
router.post('/:table', insert);
router.put('/:table', update);

async function list(req, res, next) {
  try {
    const data = await Store.list(req.params.table);

    response.success(req, res, data, 200);
  } catch (error) {
    next(error, req, res)
  }
}

async function get(req, res, next) {
  try {
    const data = await Store.get(req.params.table, res.params.id);

    response.success(req, res, data, 200);
  } catch (error) {
    next(error, req, res)
  }
}

async function insert(req, res, next) {
  try {
    const data = await Store.insert(req.params.table, res.body);

    response.success(req, res, data, 201);
  } catch (error) {
    next(error, req, res)
  }
}

async function update(req, res, next) {
  try {
    const data = await Store.update(req.params.table, res.body);

    response.success(req, res, data, 200);
  } catch (error) {
    next(error, req, res)
  }
}

module.exports = router;
