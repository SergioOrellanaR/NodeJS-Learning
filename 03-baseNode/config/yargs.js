const opt = 
{
    base:
    {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 12
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola tabla de multiplicar',opt)
    .command('crear', 'Genera archivo con tabla y limite',opt)
    .help().argv;


module.exports =
{
    argv
}