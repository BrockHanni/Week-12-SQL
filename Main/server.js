const inquirer = require('inquirer');
const mysql = require('mysql2');
const fs = require('fs');
const PORT = process.env.PORT || 3001;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company_db',
});

function executeSqlScript(scriptPath) {
    const script = fs.readFileSync(scriptPath, 'utf8');
    const statements = script.split(';').filter(Boolean);

    let currentStatement = '';

    statements.forEach((statement) => {
        currentStatement += statement.trim();

        if (currentStatement.endsWith(';')) {
            connection.query(currentStatement, (error, results) => {
                if (error) {
                    console.error('Error executing SQL statement:', error);
                } else {
                    console.log('SQL statement executed successfully:', currentStatement);
                }
            });

            currentStatement = '';
        }
    });
}
  
// Connect to the MySQL database
connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database.');
    executeSqlScript('./db/schema.sql');
    executeSqlScript('./db/seeds.sql');
    displayOptions();
});

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
            viewRoles();
          break;
        case 'View Employees':
          console.log('You selected: View Employees');
          viewEmployees();
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

    connection.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        displayOptions();
    });
}
function viewRoles() {
    const sql = `SELECT * FROM jobs`;

    connection.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        displayOptions();
    });
}
function viewEmployees() {
    const sql = `SELECT * FROM employee`;

    connection.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        displayOptions();
    });
}