//requireds
const fs = require("fs"); // => Paquete de node
var colors = require('colors');
// const fs = require('express'); => No es libreria de node, es un paquete externo que se instala.
// const fs = require('./path/fs'); => Libreria o archivos propios.

let toList = (base, limit = 12) =>
{
    console.log('=========================================================='.gray);
    console.log(`==================Tabla de ${base}=============================`.green);
    console.log('=========================================================='.grey);

    for (let i = 1; i <= limit; i++) 
    {
        console.log(`${base} * ${i} = ${base * i}`);
    }
};


let createFile = (base, limit = 12) =>
{
    return new Promise((resolve, reject) =>
    {
        if (!Number(base))
        {
            reject('La base ingresada no es un número');
            return;
        }
        let data = "";

        for (let i = 1; i <= limit; i++) 
        {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`multiplicationTables/table-${base}-limit-${limit}.txt`, data, err => 
        {
            if (err)
            {
                reject(err);
            }
            else
            {
                resolve(`table-${base}-limit-${limit}.txt`);
            };
        });
    });
};

module.exports = {
    createFile,
    toList
}