// function add(a, b)
// {
//     return a + b;
// }

let add = (a, b) => a + b;

console.log(add(10, 20));

let greet = () => 'Hello World!';

console.log(greet());

let spiderman = {
    firstName: 'Peter',
    lastName: 'Parker',
    power: 'Caminar por las paredes',
    getName()
    {
        return `${this.firstName} ${this.lastName} - poder: ${this.power}`;
    }
}

console.log(spiderman.getName());