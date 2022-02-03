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
    const config = {
      method,
      url: `${URL}/${table}`,
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

  function get(table, data) {

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
