// let description = (descriptionValue) => 
// {
//     const value =
//     {
//         description:
//         {
//             demand: true,
//             alias: 'd',
//             desc: descriptionValue
//         },
//     }

//     return value;
// }


const onlyDescription =
    {
        demand: true,
        alias: 'd',
        desc: "asdadadas"
    };

const descriptionAndCompleted =
{
    onlyDescription,
    completed:
    {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento', onlyDescription)
    .command('listar', 'Lista las tareas', descriptionAndCompleted)
    .command('actualizar', 'Actualiza a completado el estado de una tarea', descriptionAndCompleted)
    .command('borrar', 'Elimina una tarea', onlyDescription)
    .help().argv;


module.exports =
{
    argv
}