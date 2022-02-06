const { nanoid } = require('nanoid');
const error = require('../../../utils/error');

const COLLECTION = 'post';

module.exports = function (injectedStore) {
  let Store = injectedStore;

  if (!Store) {
    Store = require('../../../store/dummy');
  }

  function list() {
    return Store.list(COLLECTION);
  }

  async function get(id) {
    const post = await Store.get(COLLECTION, id);
    if (!post) {
      throw error('Post not found', 404);
    }

    return post;
  }

  async function create(data, user) {
    const post = {
      id: nanoid(),
			title: data.title,
			text: data.text,
			author: user,
    }

    return await Store.insert(COLLECTION, post);
  }

  async function update(id, data) {
    const post = {
			title: data.title,
			text: data.text,
			author: data.author,
    }

    return await Store.update(COLLECTION, post, id);
  }

  return {
    list,
    get,
    create,
    update
  }
};
