const auth = require('../../../auth');
const Controller = require('./index');

function checkAuth(action, options) {
	async function middleware(req, res, next) {
    switch(action) {
      case 'add':
      case 'list_own':
        auth.check.logged(req);
        next()
        break;

      case 'update':
        const post = await Controller.get(req.params.id);
        auth.check.own(req, post.author);
        next()
        break;

      default:
        next();
    }
	}

	return middleware;
}

module.exports = checkAuth;
