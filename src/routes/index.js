const router = require('express').Router();

const celsiustofahrenheit = require('./celsiustofahrenheit')
const recognizenumber = require('./recognizenumber')
const recognizecatordog = require('./recognizecatordog')

router.use('/celsiustofahrenheit', celsiustofahrenheit)
router.use('/recognizenumber', recognizenumber)
router.use('/recognizecatordog', recognizecatordog)

module.exports = router