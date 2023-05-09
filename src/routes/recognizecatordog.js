const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const model = require('../neuralnetwork/RecognizeCatOrDog/exported/model.json')

router.get('/model', (req, res) => {
    res.send(model);
});

router.get('/group1-shard:1of4.bin', (req, res) => {
  const weightsPath = path.join(__dirname, `../neuralnetwork/RecognizeCatOrDog/exported/group1-shard1of4.bin`);
  res.setHeader('Content-Type', 'application/octet-stream');
  fs.createReadStream(weightsPath).pipe(res);
});

router.get('/group1-shard:2of4.bin', (req, res) => {
    const weightsPath = path.join(__dirname, `../neuralnetwork/RecognizeCatOrDog/exported/group1-shard2of4.bin`);
    res.setHeader('Content-Type', 'application/octet-stream');
    fs.createReadStream(weightsPath).pipe(res);
});

router.get('/group1-shard:3of4.bin', (req, res) => {
    const weightsPath = path.join(__dirname, `../neuralnetwork/RecognizeCatOrDog/exported/group1-shard3of4.bin`);
    res.setHeader('Content-Type', 'application/octet-stream');
    fs.createReadStream(weightsPath).pipe(res);
});

router.get('/group1-shard:4of4.bin', (req, res) => {
    const weightsPath = path.join(__dirname, `../neuralnetwork/RecognizeCatOrDog/exported/group1-shard4of4.bin`);
    res.setHeader('Content-Type', 'application/octet-stream');
    fs.createReadStream(weightsPath).pipe(res);
});

module.exports = router;
