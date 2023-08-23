const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const model = require('../neuralnetwork/CelsiusToFahrenheit/exported/model.json')
const wightsPath = path.join(__dirname, '../neuralnetwork/CelsiusToFahrenheit/exported/group1-shard1of1.bin');

router.get('/model', (req, res) => {
    res.send(model);
});

router.get('/group1-shard1of1.bin', (req, res) => {
  res.setHeader('Content-Type', 'application/octet-stream');
  fs.createReadStream(wightsPath).pipe(res);
});

module.exports = router