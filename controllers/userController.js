const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const User = require('../model/user')

class UserController {
    static googleSignIn (req, res, next) {
        let user = {}
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.CLIENT_ID
        })
            .then(ticket => {
                console.log(ticket)
                user.name = ticket.getPayload().name
                user.email = ticket.getPayload().email
                user.picture = ticket.getPayload().picture

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
                const token = jwt.sign(loggedUser.email, process.env.JWT_SECRET)
                const {name, email, picture} = user
                res.json({name, email, picture, token})
            })
            .catch(next)
    }
}

module.exports = UserController