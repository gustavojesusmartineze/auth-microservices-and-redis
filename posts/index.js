const express = require('express');

const config = require('./../config');
const router = require('./components/post/network');
const errors = require('./../network/errors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/post', router);

app.use(errors);


app.listen(config.post.port, () => {
  console.log('Posts service listening on port: ', config.post.port);
});
