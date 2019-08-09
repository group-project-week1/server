const router = require('express').Router()
const weatherController = require('../controllers/weatherController')

router.get('/:city', weatherController.getWeather)

module.exports = router