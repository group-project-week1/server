# How to Use This API
### This API uses 4 APIs which are AirVisual, Unsplashed, Open Weather API, Google Embedded Map API
### You need to create tokens from AirVisual, Unsplashed, and Open Weather then fill in the keys inside .env-template
```
UNSPLASH_TOKEN=
OPENWEATHER_TOKEN=
AIRVISUAL_KEY=
```

### Then fill the password and jwt secret field with string of your choice

```
PASSWORD=
JWT_SECRET=
```
  
# The API

| Type | Path | 
| --- | --- |
| GET | /weathers/:city |
| POST | /user/google-sign-in |

# GET /weathers/:city
### Enter a city name and it will return some informations
### Example for /weathers/jakarta

```
{
    "coord": {
        "lon": 106.83,
        "lat": -6.18
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 304.03,
        "pressure": 1008,
        "humidity": 48,
        "temp_min": 303.71,
        "temp_max": 304.26
    },
    "visibility": 8000,
    "wind": {
        "speed": 5.7,
        "deg": 40
    },
    "clouds": {
        "all": 40
    },
    "dt": 1565338778,
    "sys": {
        "type": 1,
        "id": 9384,
        "message": 0.006,
        "country": "ID",
        "sunrise": 1565305318,
        "sunset": 1565348080
    },
    "timezone": 25200,
    "id": 1642911,
    "name": "Jakarta",
    "cod": 200,
    "pollution": {
        "nearest_city": "Jakarta",
        "aqi": 87,
        "status": {
            "status": "Moderate",
            "color": "#51ff00",
            "health_implications": "A level that may have a meager impact on patients in case of chronic exposure. "
        }
    },
    "image": "https://images.unsplash.com/photo-1518124226770-c2ae6a7a74ea?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjg1ODA0fQ",
    "temp": "31"
}


```
The explanation:
<pre>
`coord` -> the coordinate of the city
    `lon` -> the longitude
    `lat` -> the latitude

`weather` -> the weather objectcondition
    `id` -> the weather id
    `main` -> the weather condition
    `description` -> the description
    `icon` -> weather icon

`base` -> the base type where the weather is recorded

`main` -> 
    `temp` -> the temperature in Kelvin
    `pressure` -> the air pressure
    `humidity` -> the air humidity
    `temp_min` -> the minimum temperature of that time
    `temp_max` -> the maximum temperature of that time

`visibility` -> visibility

`wind` -> the wind condition
    `speed` -> the wind speed
    `deg` -> the wind angle

`clouds` -> clouds

`dt` -> unix time

`timezone` -> location time zone

`id` -> city id

`name` -> city name

`pollution` -> pollution condition
    `nearest city` -> the nearest station which record the air condition
    `aqi` -> the air quality index
    `status` -> the air condition status

`image` -> image based on the weather
`temp` -> the temperature in celcius
</pre>

# POST /user/google-sign-in
It will return the user information and authentication token
```
{
    email: <user google email>
    name: <user google name>
    picture: <user google avatar>
    token: <user authentication token>
}
```