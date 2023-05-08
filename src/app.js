const express = require('express');
const morgan = require('morgan');
const celciusToFahrenheit = require('./neuralnetwork/CelciusToFahrenheit/exported/model.json')
const recognizeNumber = require('./neuralnetwork/RecognizeNumber/exported/model.json')

const app = express();

app.use(morgan('dev'));

app.use((req, res, next)=>{
  console.log(req.headers.referer)
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.get('/celciustofahrenheit', (req, res) => {
    res.send(celciusToFahrenheit);
});

app.get('/recognizenumber', (req, res) => {
  res.send(celciusToFahrenheit);
});
module.exports = app;