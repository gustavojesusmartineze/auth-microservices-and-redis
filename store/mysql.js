const mysql = require('mysql');

const config = require('./../config');

const dbConfig = {
  host: config.db.mysql.host,
  port: config.db.mysql.port,
  user: config.db.mysql.user,
  password: config.db.mysql.password,
  database: config.db.mysql.database,
}

let connection;

function handleConnection() {
  connection = mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
      console.error('[db err]', err);
      setTimeout(handleConnection, 2000);
    } else {
      console.log('DB connected')
    }
  });

  connection.on('error', err => {
    console.error('[db err]', err);

    if (err.code === '[PROTOCOL_CONNECTION_LOST') {
      handleConnection();
    } else {
      throw err;
    }
  })
}

handleConnection();

function list(table) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) {
        return reject(err);
      }

      resolve(data);
    });
  })
}

function get(table, id) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE id='${id}'`, (err, data) => {
      if (err) {
        return reject(err);
      }

      resolve(data);
    });
  })
}

function insert(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
      if (err) {
        return reject(err);
      }

      resolve(result);
    });
  })
}

function update(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(`UPDATE ${table} SET ? WHERE id=?`, [data, data.id], (err, result) => {
      if (err) {
        return reject(err);
      }

      resolve(result);
    });
  })
}

module.exports = {
  list,
  get,
  insert,
  update
}
