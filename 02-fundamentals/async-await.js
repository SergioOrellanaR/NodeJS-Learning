//Con Async estamos convirtiendo en promesa.
let getName = async() =>
{
    try
    {
        //neme = await var;
        return 'Sergio';
    }
    catch
    {
        throw new Error('Ha ocurrido un error!');
    }
    
} 

getName().then(name => {
    console.log(name);
})
.catch( (err) => console.log(err));

