const axios = require('axios')

class WeatherController {
    static getWeather(req, res, next) {
        let { city } = req.params
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70ad314ffdc6ad72a7adfeec014161a3`
        axios.get(url)
        .then(({data}) => {
            res.status(200).json(data)
        })
        .catch(next)
    }
}

module.exports = WeatherController