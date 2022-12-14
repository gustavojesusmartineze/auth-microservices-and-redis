const express = require('express');

const secure = require('./secure');
const response = require('./../../../network/response');
const controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);
router.post('/follow/:id',
  secure('follow'),
  follow
);
router.get('/:id/following', following);
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
    next(error, req, res);
  }
}

async function get(req, res, next) {
    try {
    const { id } = req.params;
    const user = await controller.get(id);

    response.success(req, res, user, 200);
  } catch (error) {
    next(error, req, res);
  }
}

async function create(req, res, next) {
  try {
    const body  = req.body;
    const user = await controller.create(body);

    response.success(req, res, user, 201);
  } catch (error) {
    next(error, req, res);
  }
}

async function update(req, res, next) {
  try {
    const body  = req.body;
    const id = req.params.id;

    const user = await controller.update(id, body);

    response.success(req, res, user, 200);
  } catch (error) {
    next(error, req, res);
  }
}

async function follow(req, res, next) {
  try {
    const user_to = req.params.id;
    const user_from = req.user.id;
    const result = await controller.follow(user_from, user_to);

    response.success(req, res, result, 201);
  } catch (error) {
    next(error, req, res);
  }
}

function following(req, res, next) {
	return controller.following(req.params.id)
		.then( (data) => {
			return response.success(req, res, data, 200);
		})
		.catch(next);
}

module.exports = router;
