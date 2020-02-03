const colors = require('colors');
const { createFile, toList } = require('./multiply/multiply.js');
const argv = require('./config/yargs.js').argv;


let command  = argv._[0];
let base    = argv.base;
let limit   = argv.limit;

switch (command)
{
  case 'listar':
    toList(base, limit);
    break;
  case 'crear':
    createFile(base, limit).then((file) => console.log(`Archivo creado!: ${colors.blue(file)}`)).catch(error => console.log(error));
    break;

  default:
    console.log('Comando no reconocido');
    break;
}
// console.log(argv.base);
// console.log(argv.limit);

