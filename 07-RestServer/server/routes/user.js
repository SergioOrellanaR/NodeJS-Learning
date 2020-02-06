const express = require('express');
const app = express();

app.get('/user', function (req, res)
{
    res.json('get User');
});

app.post('/user', function (req, res)
{
    let body = req.body;

    if (body.name === undefined)
    {
        res.status(400).json(
            {
                ok: false,
                message: 'Es necesario ingresar el nombre'
            }
        );
    } else
    {
        res.json((
            {
                persona: body
            }
        ));

    }

});

app.put('/user/:id', function (req, res)
{
    let id = req.params.id;
    res.json({ id });
});

app.delete('/user', function (req, res)
{
    res.json('delete User');
});

module.exports = app;