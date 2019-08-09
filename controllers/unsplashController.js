const axios = require('axios')
const url = "https://api.unsplash.com/search/photos"
require('dotenv').config()

class unsplashedController{
    static getImage(req, res, next) {
        let { city } = req.params
        let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70ad314ffdc6ad72a7adfeec014161a3`
        axios.get(urlWeather)
        .then(({data}) => {
            let query = data.weather[0].main
            axios.get(`${url}?page=1&orientation=landscape&query=${query} sky`, {headers: {Authorization: 'Client-ID ' + process.env.UNSPLASH_TOKEN}})
            .then((result) => {
                res.status(200).json(result.data.results[0].urls.regular)
             })
        })
        .catch(next)
    }
}

module.exports = unsplashedController
