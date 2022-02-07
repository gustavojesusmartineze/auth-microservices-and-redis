const { nanoid } = require('nanoid');
const auth = require('../auth');

const TABLE_USER = 'user';
const TABLE_FOLLOW = 'user_follow';

module.exports = function (injectedStore, injectedCache) {
  let store = injectedStore;
  let cache = injectedCache;

  if (!store) {
    store = require('./../../../store/dummy');
  }

  if (!cache) {
    store = require('./../../../store/dummy');
  }

  async function list() {
    let users = await cache.list(TABLE_USER);

    if (!users) {
      users = await store.list(TABLE_USER);
      cache.upsert(TABLE_USER, users);
      console.log(`${TABLE_USER} was not in cache, getting data from DB`);
    } else {
      console.log('Getting data from cache');
    }

    return users;
  }

  function get(id) {
    return store.get(TABLE_USER, id);
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

    return store.insert(TABLE_USER, user);
  }

  async function update(id, body) {
    const user = {
      name: body.name,
      username: body.username,
    }

    if (body.password || body.username) {
      await auth.update({
        id: id,
        username: body.username,
        password: body.password,
      })
    }

    return store.update(TABLE_USER, user, id);
  }

  function follow(from, to) {
    return store.insert(TABLE_FOLLOW, {
      user_from: from,
      user_to: to
    });
  }

  async function following(user) {
    const join = {};
    join[TABLE_USER] = 'user_to'; // { user: 'user_to' }
    const query = { user_from: user };

    return await store.query(TABLE_FOLLOW, query, join);
  }

  return {
    list,
    get,
    create,
    update,
    follow,
    following
  }
}
