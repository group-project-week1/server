const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)
const jwt = require('jsonwebtoken')

class UserController {
    static signIn (req, res, next) {
    }
}