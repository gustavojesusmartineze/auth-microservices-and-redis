const { nanoid } = require('nanoid');
const auth = require('../auth');

const TABLE = 'user';

module.exports = function (injectedStore) {
  let store = injectedStore;

  if (!store) {
    store = require('./../../../store/dummy');
  }

  function list() {
    return store.list(TABLE);
  }

  function get(id) {
    return store.get(TABLE, id);
  }

  async function create(body) {
    const user = {
      id: nanoid(),
      name: body.name,
      username: body.username,
    }

    if (body.password || body.username) {
      await auth.create({
        id: user.id,
        username: body.username,
        password: body.password,
      })
    }

    return store.insert(TABLE, user);
  }

  async function update(body) {
    const user = {
      name: body.name,
      username: body.username,
    }

    if (body.id) {
      user.id = body.id;
    } else {
      user.id = nanoid();
    }

    if (body.password || body.username) {
      await auth.update({
        id: user.id,
        username: body.username,
        password: body.password,
      })
    }

    return store.update(TABLE, user);
  }

  return {
    list,
    get,
    create,
    update
  }
}
