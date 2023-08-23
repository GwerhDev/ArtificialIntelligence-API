const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const model = require('../neuralnetwork/RecognizeNumber/exported/model.json')
const weightsPath = path.join(__dirname, '../neuralnetwork/RecognizeNumber/exported/group1-shard1of1.bin');

router.get('/model', (req, res) => {
    res.send(model);
});

router.get('/group1-shard1of1.bin', (req, res) => {
  res.setHeader('Content-Type', 'application/octet-stream');
  fs.createReadStream(weightsPath).pipe(res);
});

module.exports = router