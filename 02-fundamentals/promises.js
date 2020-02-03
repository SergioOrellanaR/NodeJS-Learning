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

let getEmployee = (id) =>
{
    return new Promise((resolve, reject) =>
    {

        let employeeDB = employees.find((employee) => employee.id === id);

        if (!employeeDB)
        {
            reject(`Empleado con ID: ${id} no encontrado`);
        }
        else
        {
            resolve(employeeDB);
        }

    })
};


let getSalary = (employee) =>
{
    return new Promise((resolve, reject) =>
    {
        let salaryDB = salaries.find((salary) => salary.id === employee.id);

        if (!salaryDB)
        {
            reject(`No se encontró salario de ${employee.name}`);
        }
        else
        {
            salaryUser = {
                name: employee.name,
                salary: salaryDB.salary
            }
            resolve(salaryUser);
        }
    })
}

// getEmployee(3).then((employee) =>
// {
//     getSalary(employee).then(resp => 
//     { 
//         console.log(`El salario de ${resp.name} es de $${resp.salary}`)
//     }, (error) => console.log(error))
// }, (error) => console.log(error));

getEmployee(4)
.then((employee) =>
{
    return getSalary(employee);
})
.then(
    resp => console.log(`El salario de ${resp.name} es de $${resp.salary}`)
)
.catch(err => console.log(err));