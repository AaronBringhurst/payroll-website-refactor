// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let employee = [];
  let addMore = true;

    // This function will prevent users from imputing numbers or special characters.//
  function getValidName(promptMessage) {
    let isValid = false;
    let nameInput;

    while (!isValid) {
      nameInput = prompt(promptMessage);
      if (nameInput === null) {
        alert('Please enter a name without numbers or specal characters.')
        continue;
        }
        isValid = /^[A-Za-z\s]+$/.test(nameInput);
        if (!isValid) {
          alert('Invalid! Please use letters only.')
        }

      }
    
    }
    while(addMore) {
      let firstName = getValidName('Enter employees first name:');
      let lastName = getValidName('Enter employees last name:');
      let salaryInput= prompt('Enter employees salary:');
      let salary = isNaN(Number(salaryInput)) ? 0 : Number(salaryInput);

      employee.push({firstName, lastName, salary});

      addMore =confirm('Would you like to add another employee?')
    }
    return nameInput;
  }



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = employeesArray.reduce((acc, curr) => acc + curr.salary, 0);
  let averageSalary = totalSalary / employeesArray.length;
  console.log('Average Salary: $${averageSalary.toFixed(2)}, Total Employees: ${employeesArray.length}')
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
    let randomIndex = Math.floor(Math.random() * employeesArray.length);
    let randomEmployee = employeesArray[randomIndex];
    console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
