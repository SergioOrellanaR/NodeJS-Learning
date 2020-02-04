const fs = require('fs');
const colors = require('colors');

let listToDo = [];

const saveOnDB = () =>
{
    let data = JSON.stringify(listToDo);

    fs.writeFile('data/db.json', data, err =>
    {
        if (err)
        {
            throw new Error('Error al grabar', err);
        }
    });
}

const create = (description) =>
{

    loadDB();

    let toDo = {
        description,
        completed: false,
    };

    listToDo.push(toDo);
    saveOnDB();

    return toDo;
}

const loadDB = () =>
{
    try
    {
        listToDo = require('../data/db.json');
    } catch (error)
    {
        listToDo = [];
    }
}

const getList = () => 
{
    loadDB();
    for (let task of listToDo) 
    {
        console.log('====================================='.green);
        console.log(task.description);
        console.log('Estado: ', task.completed);
        console.log('====================================='.green);
    }
}

const update = (description, completed = true) =>
{
    loadDB();
    
    let index = listToDo.findIndex(
        task => task.description === description
    );

    if(index != -1)
    {
        listToDo[index].completed = completed;
        saveOnDB();
        return true;
    }
    else
    {
        return false;
    }
}

const deleteTask = (description) =>
{
    loadDB();
    let index = listToDo.findIndex(
        task => task.description === description
    );

    if(index != -1)
    {
        listToDo.splice(index, 1);
        saveOnDB();
        return true;
    }
    else
    {
        return false;
    }
}

module.exports = {
    create,
    getList,
    update,
    deleteTask
}

