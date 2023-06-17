const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'company_db'
    },
    console.log(`Connected to the employee_tracker_db database.`)
);

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    displayOptions();
}
);
function displayOptions() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'Welcome to the company database. What would you like to do?',
        choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update an Employees Role'],
      },
    ])
    .then((answers) => {
      switch (answers.choice) {
        case 'View Departments':
          console.log('You selected: View Departments');
          viewDepartments();
          break;
        case 'View Roles':
          console.log('You selected: View Roles');
          // 
          break;
        case 'View Employees':
          console.log('You selected: View Employees');
          // 
          break;
        case 'Add Department':
            console.log('You selected: Add Department');
            // 
            break;
        case 'Add Role':
            console.log('You selected: Add Role');
            //
            break;
        case 'Add Employee':
            console.log('You selected: Add Employee');
            // 
            break;
        case 'Update an Employees Role':
            console.log('You selected: Update an Employees Role');
            // 
            break;
        default:
          console.log('Invalid choice');
      }
    });
}
function viewDepartments() {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        displayOptions();
    });
}
