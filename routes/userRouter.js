const router = require('express').Router()
const UserController = require('../controllers/userController')

router.post('/google-sign-in', UserController.googleSignIn)

module.exports = router