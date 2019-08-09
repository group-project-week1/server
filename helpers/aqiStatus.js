function aqiStatus(aqi) {
    if(aqi <= 50) {
        return {
            status: "Good",
            color: "#009eff",
            health_implications: "A level that will not impact patients suffering from diseases related to air pollution. "
        }
    } else if( aqi <= 100) {
        return {
            status: "Moderate",
            color: "#51ff00",
            health_implications: "A level that may have a meager impact on patients in case of chronic exposure. "
        }
    } else if (aqi <= 200) {
        return {
            status: "Unhealthy for sensitive groups",
            color: "#ecff00",
            health_implications: "A level that may have harmful impacts on patients and members of sensitive groups. "
        }
    } else if( aqi <= 300) {
        return {
            status: "Unhealthy",
            color: '#ffae00',
            health_implications: "A level that may have harmful impacts on patients and members of sensitive groups (children, aged or weak people), and also cause the general public unpleasant feelings. "
        }
    } else if( aqi <= 400) {
        return {
            status: "Very Unhealthy",
            color: '#ff4200',
            health_implications: "A level that may have a serious impact on patients and members of sensitive groups in case of acute exposure. "     
        }
    } else {
        return {
            status: "Hazardous",
            color: "#b22603",
            health_implications: "A level that may have a serious impact on patients and members of sensitive groups in case of acute exposure. "
        }
    }
}

module.exports = aqiStatus