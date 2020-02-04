// const argv = require('yargs').argv;

const argv = require('./config/yargs.js').argv;
const toDo = require('./toDo/toDo.js');
let command = argv._[0];

switch (command)
{
    case 'crear':
        let task = toDo.create(argv.description);
        console.log(argv.description + ' Agregada');
        break;
    case 'listar':
        toDo.getList();
        break;
    case 'actualizar':
        var isTrueSet = (argv.completed == 'true');
        let updateIsValid = toDo.update(argv.description, isTrueSet);
        console.log(updateIsValid);
        break;
    case 'borrar':
        let removeIsValid = toDo.deleteTask(argv.description)
        console.log(removeIsValid);
        break;
    default:
        console.log('Comando no identificado');
        break;
}
