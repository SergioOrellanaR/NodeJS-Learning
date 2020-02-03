let name = 'Spiderman';
let real = 'Peter Parker';

// console.log(`${name} es ${real}`);

let nombreCompleto = `${name} es ${real}`;
let nombreTemplate = name + ' es ' + real;

console.log(nombreCompleto === nombreTemplate);



function getName(){
    return `${name} es ${real}`;
}

console.log(`Llamado de nombre de función: ${getName()}`);