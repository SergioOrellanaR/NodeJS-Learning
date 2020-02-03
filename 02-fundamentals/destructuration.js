let spiderman = {
    firstName: 'Peter',
    lastName: 'Parker',
    power: 'Caminar por las paredes',
    getName: function ()
    {
        return `${this.firstName} ${this.lastName} - poder: ${this.power}`;
    }
}

console.log(spiderman.getName());


let {
    firstName: nombre, lastName: apellido, power
} = spiderman;

console.log(nombre, apellido, power);