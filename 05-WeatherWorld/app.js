const argv = require('./config/yargs.js').argv;
const places = require('./places/places.js');
const weather = require('./places/weather.js');


const getInfo = async (address) =>
{
    try
    {
        const coordinates = await places.getPlaceLatLng(address);
        const celsius = await weather.getWeatherByLatLng(coordinates.lat, coordinates.lon);
        return `El clima actual de ${address} es de ${celsius} grados Celsius`;
    }
    catch (e)
    {
        return `No se pudo determinar el clima de ${address}`;
    }
}

getInfo(argv.address)
    .then((message) => console.log(message))
    .catch((err) => console.log(err.message))