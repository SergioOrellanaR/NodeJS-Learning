
require('./config/config.js');
var bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/user.js'));

mongooseDbport = 27017;
mongoose.connect(`mongodb://localhost:${mongooseDbport}/cafe`, (err, res) => {
    if (err)
    {
        throw err;
    }
    else
    {
        console.log('Base de datos online');
    }
});


let port = process.env.PORT;

app.listen(port, () =>
{
    `Escuchando en puerto: ${port}`;
})