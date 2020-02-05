// Este es solo un ejemplo

const http = require('http');

http.createServer((request,response)=>
{
    response.writeHead(200, {'Content-Type': 'aplication/json'});

    let output = {
        name: 'Sergio',
        age: 25,
        url: request.url
    };

    // response.write('Hola Mundo!');
    response.write(JSON.stringify(output));
    response.end();

}).listen(8080);

console.log('Escuchando en el 8080');