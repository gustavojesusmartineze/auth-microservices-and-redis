const db = {
  'users': [
    { id: 1, name: 'Gustavo' },
    { id: 2, name: 'Jesus' },
    { id: 3, name: 'Martinez' },
    { id: 4, name: 'Espezua' }
  ]
};

async function list(table) {
  return db[table];
}

async function get(table, id) {
  const col = await list(table);

  return col.find((item) => item.id == id) || null;
}

async function upsert(table, data) {
  if (!db[table]) {
    db[table] = [];
  }
  db[table].push(data);

  console.log(db);

  return data;
}

async function remove(table, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove
}
