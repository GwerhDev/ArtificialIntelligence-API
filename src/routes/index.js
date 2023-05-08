const router = require('express').Router();

const celsiustofahrenheit = require('./celsiustofahrenheit')
const recognizenumber = require('./recognizenumber')


router.use('/celsiustofahrenheit', celsiustofahrenheit)
router.use('/recognizenumber', recognizenumber)

module.exports = router