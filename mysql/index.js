const express = require('express');
const config = require('./../config');
const router = require('./network');

const app = express();

app.use(express.json());
app.use('/', router);

// ROUTES

app.listen(config.mysqlService.port, () => {
  console.log('MySQL service listening on port: ', config.mysqlService.port);
});
