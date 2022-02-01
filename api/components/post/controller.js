const { nanoid } = require('nanoid');
const auth = require('../auth');

const TABLE_POST = 'post';

module.exports = function (injectedStore) {
  let store = injectedStore;

  if (!store) {
    store = require('./../../../store/dummy');
  }

  function list() {
    return store.list(TABLE_POST);
  }

  return {
    list,
  }
};
