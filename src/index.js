const express = require('express');
const morgan = require('morgan');
const celciusToFahrenheit = require('./neuralnetwork/CelciusToFahrenheit/model.json')

const app = express();

app.use(morgan('dev'));

app.get('/celciustofahrenheit', (req, res) => {
  res.send(celciusToFahrenheit);
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});