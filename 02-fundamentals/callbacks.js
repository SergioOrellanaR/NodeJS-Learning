// let callback = () => console.log('Hello World');

// setTimeout(
//     callback, 3000
// );

let getUserById = (id, callback) => {
    let user = {
        name: 'Sergio',
        //En estos casos, como id = id, solo basta con llamar una vez el valor.
        id
    }

    //Digamos que ID 20 no existe.
    if( id === 20)
    {
        
        callback(`El usuario con id ${id}, no existe en DB`);
    }
    else
    {
        callback(null, user);

    }

    
}


getUserById(10, (error, user) => 
{
    if(error)
    {
        return console.log(error);

    }
    else
    {
        console.log('Usuario de base de datos: ', user);
    }
});
