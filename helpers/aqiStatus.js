function aqiStatus(aqi) {
    if(aqi <= 50) {
        return {
            status: "Good",
            color: "#009eff"
        }
    } else if( aqi <= 100) {
        return {
            status: "Moderate",
            color: "#51ff00"
        }
    } else if (aqi <= 150) {
        return {
            status: "Unhealthy for sensitive groups",
            color: "#ecff00"
        }
    } else if( aqi <= 200) {
        return {
            status: "Unhealthy",
            color: '#ffae00'
        }
    } else if( aqi <= 300) {
        return {
            status: "Very Unhealthy",
            color: '#ff4200'        
        }
    } else {
        return {
            status: "Hazardous",
            color: "#b22603"
        }
    }
}

module.exports = aqiStatus