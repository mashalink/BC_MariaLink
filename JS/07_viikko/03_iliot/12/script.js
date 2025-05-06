/* Tehtävä 12
Luo konstruktori-funktio `Employee`, jolla on `name`, `position` ja `salary`.
Lisää metodi `increaseSalary(percent)`, joka kasvattaa palkkaa annetulla prosentilla.
Luo työntekijä ja nosta hänen palkkaansa dynaamisesti.
*/
const employees = [];

function Employee(id, name, position, salary) {
  this.id = id;
  this.name = name;
  this.position = position;
  this.salary = salary;

  this.increaseSalary = function (percent) {
    this.salary += (this.salary * percent) / 100;
  };

  this.getInfo = function () {
    console.log(
      `Added: Name: ${this.name}, Position: ${
        this.position
      }, Salary: $${this.salary.toFixed(2)}`
    );
  };
}

const addEmployees = () => {
  const name = document.getElementById("name").value;
  const position = document.getElementById("position").value;
  const salaryInput = document.getElementById("salary").value;
  const salary = parseFloat(salaryInput);

  if (name.trim() !== "" && position.trim() !== "" && !isNaN(salary)) {
    const id = employees.length + 1;
    const newEmployee = new Employee(id, name, position, salary);
    employees.push(newEmployee);
    newEmployee.getInfo();
    fullingHTML();
  } else {
    alert("Please fill in all fields correctly.");
  }
};

const increaseSalary = () => {
  const empId = document.getElementById("empId").value;
  const percent = parseFloat(document.getElementById("procent").value);

  if (isNaN(empId) || isNaN(percent)) {
    alert("Please enter a valid ID and percent.");
    return;
  }

  const employee = employees.find((emp) => emp.id === parseInt(empId));

  if (employee) {
    employee.increaseSalary(percent);
    fullingHTML();
  } else {
    alert("Employee not found.");
  }
};

function fullingHTML() {
  const list = document.getElementById("listEmployees");
  list.innerHTML = "";

  employees.forEach((employee, index) => {
    const nameEl = document.createElement("h2");
    nameEl.textContent = employee.name;
    list.appendChild(nameEl);

    const idEl = document.createElement("p");
    idEl.textContent = `ID: ${employee.id}`;
    list.appendChild(idEl);

    const positionEl = document.createElement("p");
    positionEl.textContent = `Position: ${employee.position}`;
    list.appendChild(positionEl);

    const salaryEl = document.createElement("p");
    salaryEl.textContent = `Salari: ${employee.salary.toFixed(2)}`;
    list.appendChild(salaryEl);

    list.appendChild(document.createElement("hr"));
  });
}

fullingHTML();
