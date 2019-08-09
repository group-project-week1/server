const router = require('express').Router()
const unsplashController = require('../controllers/unsplashController')

router.get('/:city', unsplashController.getImage)

module.exports = router