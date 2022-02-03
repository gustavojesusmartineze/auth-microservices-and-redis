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
    let body = '';

    if (method === HTTP_METHODS.GET && data) {
      url += '/'+ data;
    } else if (data) {
      body = JSON.stringify(data);
    }

    const config = {
      method,
      url: url,
      data: body || null,
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

  }

  function update(table, data) {

  }

  function remove(table, data) {

  }


  function query(table, data, join) {

  }

  return {
    list,
    get,
    insert,
    update,
    query
  }
}

module.exports = createRemoteDB;
