const express = require('express');
const morgan = require('morgan');
const app = express();
const routes = require('./routes/index.js');

app.use(morgan('dev'));

app.use((req, res, next)=>{
  console.log(req.headers.referer)
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('/', routes);

module.exports = app;