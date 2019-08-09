const axios = require('axios')
class AqiController {
    static getAqi(req, res, next) {
        axios.get("http://api.airvisual.com/v2/nearest_city?lat=-6.93&lon=107.61&key=dcbff0f5-0e03-42c7-8ec1-3c8a452ab916")
            .then(({data}) => {
                res.json(data)
            })
            .catch(function(err) {
                console.log('err', err)
            })
    }
}

module.exports = AqiController