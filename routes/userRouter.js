const router = require('express').Router()
const UserController = require('../controllers/userController')

router.post('/google-sign-in', UserController.googleSignIn)

router.get('/github-sign-in', UserController.githubSignIn)

module.exports = router