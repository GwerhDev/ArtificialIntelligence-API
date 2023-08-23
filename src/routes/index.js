const router = require('express').Router();

const celsiustofahrenheit = require('../controllers/celsiustofahrenheit');
const recognizenumber = require('../controllers/recognizenumber');
const recognizecatordog = require('../controllers/recognizecatordog');

router.use('/celsiustofahrenheit', celsiustofahrenheit);
router.use('/recognizenumber', recognizenumber);
router.use('/recognizecatordog', recognizecatordog);

module.exports = router;