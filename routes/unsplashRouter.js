const router = require('express').Router()
const unsplashController = require('../controllers/unsplashController')

router.get('/search/:query', unsplashController.getImage)

module.exports = router