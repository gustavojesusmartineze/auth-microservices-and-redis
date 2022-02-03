const axios = require('axios');

const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
};

function createRemoteDB(host, port) {
  const URL = `${host}:${port}`;

  function handleRequest(method, table, data) {
    let url = URL + '/' + table;

    if (data && (method === HTTP_METHODS.GET || method === HTTP_METHODS.DELETE)) {
      url += '/'+ data;
    }

    const config = {
      method,
      url: url,
      data: data || null,
    };

    return new Promise((resolve, reject) => {
      axios(config)
        .then((response) => {
          resolve(response.data.body);
        })
        .catch((error) => {
          console.log('Error with the remote database', error)
          reject(error);
        });
    });
  }

  function list(table) {
    return handleRequest(HTTP_METHODS.GET, table);
  }

  function get(table, id) {
    const url = `${table}/${id}`;

    return handleRequest(HTTP_METHODS.GET, url);
  }

  function insert(table, data) {
    return handleRequest(HTTP_METHODS.POST, table, data);
  }

  function update(table, data) {
    return handleRequest(HTTP_METHODS.PUT, table, data);
  }

  function remove(table, id) {
    return handleRequest(HTTP_METHODS.DELETE, table, id);
  }

  function query(table, data, join) {
    return handleRequest(HTTP_METHODS.POST, table + '/query', { query, join });
  }

  return {
    list,
    get,
    insert,
    update,
    remove,
    query
  }
}

module.exports = createRemoteDB;
