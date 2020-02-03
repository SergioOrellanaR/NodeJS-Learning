let employees = [
  {
    id: 1,
    name: "Sergio"
  },
  {
    id: 2,
    name: "Fernando"
  },
  {
    id: 3,
    name: "Joaquín"
  }
];

let salaries = [
  {
    id: 1,
    salary: 1000
  },
  {
    id: 2,
    salary: 2000
  }
];

let getEmployee = (id, callback) => {
  let employeeDB = employees.find(employee => employee.id === id);

  if (!employeeDB) {
    callback(`Empleado con ID: ${id} no encontrado`);
  } else {
    callback(null, employeeDB);
  }
};

//Si encuentra salario para un empleado, debe devolver variable con el nombre y salario correspondiente, en caso de error mostrar mensaje de "No se encontró salario del usuario {Nombre}"

let getSalary = (employee, callback) => {
  let salaryDB = salaries.find(salary => salary.id === employee.id);

  if (!salaryDB) {
    callback(`No se encontró salario de ${employee.name}`);
  } else {
    salaryUser = {
      name: employee.name,
      salary: salaryDB.salary
    };
    callback(null, salaryUser);
  }
};

getEmployee(3, (error, employee) => {
  if (error) {
    return console.log(error);
  } else {
    getSalary(employee, (error, resp) => {
      if (error) {
        return console.log(error);
      } else {
        console.log(`El salario de ${resp.name} es de $${resp.salary}`);
      }
    });
  }
});
