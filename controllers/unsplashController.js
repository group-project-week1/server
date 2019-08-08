const axios = require('axios')
const url = "https://api.unsplash.com/search/photos"
require('dotenv').config()

class unsplashedController{
    static getImage(req, res, next) {
        let { query } = req.params
        axios.get(`${url}?page=1&orientation=landscape&query=${query} sky`, {headers: {Authorization: 'Client-ID ' + process.env.UNSPLASH_TOKEN}})
        .then(({data}) => {
            res.status(200).json(data.results[0].urls.regular)
        })
        .catch(next)
    }
}

module.exports = unsplashedController
