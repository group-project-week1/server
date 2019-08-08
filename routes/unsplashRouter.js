const router = require('express').Router()
const unsplashController = require('../controllers/unsplashController')

router.get('/:query', unsplashController.getImage)

module.exports = router