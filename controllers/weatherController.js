const axios = require('axios')

class WeatherController {
    static getWeather(req, res, next) {
        let { city } = req.params
        let outputData = {}
        outputData.city = req.params.city
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70ad314ffdc6ad72a7adfeec014161a3`
        axios.get(url)
        .then(({data}) => {
            let longitude = data.coord.lon
            let latitude = data.coord.lat
            let airVisualUrl = `http://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${process.env.AIRVISUAL_KEY}`
            outputData = data
            return axios.get(airVisualUrl)
            // res.status(200).json(data)
        })
        .then((aqi) => {
            // res.json(aqi)
            outputData.pollution = {}
            outputData.pollution.nearest_city = aqi.data.data.city
            outputData.pollution.aqi = aqi.data.data.current.pollution.aqicn
            res.json(outputData)
        })
        .catch(next)
    }
}

module.exports = WeatherController