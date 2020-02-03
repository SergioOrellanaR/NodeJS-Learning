let employees =
    [
        {
            id: 1,
            name: 'Sergio'
        },
        {
            id: 2,
            name: 'Fernando'
        },
        {
            id: 3,
            name: 'Joaquín'
        }
    ];

let salaries =
    [
        {
            id: 1,
            salary: 1000
        },
        {
            id: 2,
            salary: 2000
        }
    ];

let getEmployee = async (id) =>
{
    let employeeDB = employees.find((employee) => employee.id === id);

    if (!employeeDB)
    {
        throw new Error(`Empleado con ID: ${id} no encontrado`);
    }
    else
    {
        return employeeDB;
    }
};


let getSalary = async (employee) =>
{
    let salaryDB = salaries.find((salary) => salary.id === employee.id);

    if (!salaryDB)
    {
        throw new Error(`No se encontró salario de ${employee.name}`);
    }
    else
    {
        salaryUser = {
            name: employee.name,
            salary: salaryDB.salary
        }
        return salaryUser;
    }
}

let getInformation = async (id) =>
{
    let employee = await getEmployee(id);
    let resp = await getSalary(employee);

    return `El salario de ${resp.name} es de $${resp.salary}`;
}

//error.message solo devuelve el error en cuestión.
getInformation(3).then(message => console.log(message)).catch(error => console.log(error.message));