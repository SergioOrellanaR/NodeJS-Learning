const axios = require('axios');

const locationApiKey = require('../config/keys.js').apiKeyLocation;

const getPlaceLatLng = async (address) => 
{
    const addressToUri = encodeURI(address);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${addressToUri}`,
        timeout: 3000,
        headers: { 'x-rapidapi-key': locationApiKey }
    });

    const response = await instance.get();

    if (response.data.Results.length === 0)
    {
        throw new Error(`Resultados no encontrados para ${address}`);
    }
    else
    {
        const data = response.data.Results[0];

        const name = data.name;
        const lat = data.lat;
        const lon = data.lon;
        
        return {
            name,
            lat,
            lon
        }
    }
}

module.exports =
{
    getPlaceLatLng
}