const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const axios = require('axios')

const User = require('../model/user')

class UserController {
    static googleSignIn (req, res, next) {
        const client = new OAuth2Client(process.env.CLIENT_ID)
        let user = {}
        client.verifyIdToken({
            idToken: req.body.idToken,
            audience: process.env.CLIENT_ID
        })
            .then(ticket => {
                user.name = ticket.payload().name
                user.email = ticket.payload().email
                user.picture = ticket.payload().picture

                return User.findOne({mail: user.mail})
            })
            .then(foundUser => {
                if(!foundUser) {
                    const salt = bcrypt.genSaltSync(10);
                    const hash = bcrypt.hashSync(process.env.PASSWORD, salt);

                    user.password = hash
                    return User.create({
                        name: user.name,
                        email: user.email,
                        password: user.password
                    })
                } else {
                    return foundUser
                }
            })
            .then(loggedUser => {
                const token = jwt.sign(createdUser.email, process.env.JWT_SECRET)
            })
    }
}

module.exports = UserController