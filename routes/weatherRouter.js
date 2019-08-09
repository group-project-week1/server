const router = require('express').Router()
const weatherController = require('../controllers/weatherController')
const aqiController = require('../controllers/aqiController')

router.get('/:city', weatherController.getWeather)

// router.get('/:city/aqi', aqiController.getAqi)

module.exports = router