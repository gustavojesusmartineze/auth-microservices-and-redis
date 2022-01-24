const db = {
  'users': [
    { id: 1, name: 'Gustavo' },
    { id: 2, name: 'Jesus' },
    { id: 3, name: 'Martinez' },
    { id: 4, name: 'Espezua' }
  ]
};

function list(table) {
  return db[table];
}

function get(table, id) {
  const col = list(table);

  return col.find((item) => item.id == id) || null;
}

function upsert(table, data) {
  db[table].push(data);
}

function remove(table, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove
}
