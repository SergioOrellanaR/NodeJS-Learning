const axios = require('axios');
const apiKeyOpenWeather = require('../config/keys.js').apiKeyOpenWeather;

const getWeatherByLatLng = async (lat, lng) => 
{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKeyOpenWeather}&units=metric`);
    
    return response.data.main.temp;
}

module.exports =
    { 
        getWeatherByLatLng
    };