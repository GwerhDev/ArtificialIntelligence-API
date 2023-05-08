const express = require('express');
const morgan = require('morgan');
const celciusToFahrenheit = require('./neuralnetwork/CelciusToFahrenheit/model.json')

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
    console.log('CTF from: ', req.originalUrl)
    console.log('Sending: ', celciusToFahrenheit)
    res.send(celciusToFahrenheit);
});

app.listen(3000, () => {

  console.log('Servidor iniciado en el puerto 3000');
});

module.exports = app;