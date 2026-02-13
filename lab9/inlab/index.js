const express = require("express");
const path = require("path");
const port = 3000;
const sqlite3 = require('sqlite3').verbose();

// Creating the Express server
const app = express();

// Connect to SQLite database
let db = new sqlite3.Database('employee-2.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
});


// static resourse & templating engine
app.use(express.static('public'));
// Set EJS as templating engine
app.set('view engine', 'ejs');


// routing path
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/create', function (req, res) {
    // create table 
    const sql = ` CREATE TABLE employees (
    EmployeeId INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    LastName NVARCHAR(20)  NOT NULL,
    FirstName NVARCHAR(20)  NOT NULL,
    Title NVARCHAR(30),
    Phone NVARCHAR(24),
    Email NVARCHAR(60) ); `;

    db.run(sql, (err) => {
        if (err) {
            return console.error('Error creating table:', err.message);
        }
        console.log('Table created successful');
    });

});

app.get('/insert', function (req, res) {
    let sql = `
INSERT INTO employees 
(FirstName, LastName, Title, Phone, Email) VALUES
('John', 'Smith', 'Manager', '0812345678', 'john.smith@email.com'),
('Emma', 'Johnson', 'HR Officer', '0823456789', 'emma.j@email.com'),
('Liam', 'Williams', 'Developer', '0834567890', 'liam.w@email.com'),
('Olivia', 'Brown', 'Accountant', '0845678901', 'olivia.b@email.com'),
('Noah', 'Jones', 'Marketing Executive', '0856789012', 'noah.j@email.com'),
('Ava', 'Garcia', 'Sales Representative', '0867890123', 'ava.g@email.com'),
('William', 'Miller', 'IT Support', '0878901234', 'will.m@email.com'),
('Sophia', 'Davis', 'Project Coordinator', '0889012345', 'sophia.d@email.com'),
('James', 'Martinez', 'Business Analyst', '0890123456', 'james.m@email.com'),
('Isabella', 'Anderson', 'Designer', '0801234567', 'isabella.a@email.com');
`;

    db.run(sql, function (err) {
        if (err) {
            return console.log(err.message);
        }
        console.log("10 rows inserted successfully");
    });
});

app.get('/show', function (req, res) {
    const query = 'SELECT * FROM employees;';
    db.all(query, (err, rows) => {
        if (err) {
            console.log(err.message);
        }
        console.log(rows);
        res.render('show', { data: rows });
    });
});

app.get('/delete/:id', function (req, res) {
    // Deleting Data
    let sql = `DELETE FROM employees WHERE EmployeeId = ${req.params.id};`;
    // delete a row based on id
    db.run(sql, function (err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Row(s) deleted.`);
        res.redirect("/show");
    });

});

app.get('/form', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/form.html"));
});

app.get('/formget', function (req, res) {
    const { lname, fname,title, phone , email} = req.query; 
    //
    let sql = `INSERT INTO employees (LastName, FirstName, Title, Phone, Email) VALUES (?,?,?,?,?); `;
    console.log(sql);
    db.run(sql,[ lname, fname,title, phone , email], (err) => {
        if (err) {
            return console.error('Error inserting data:', err.message);
        }
        console.log('Data inserted successful'); 
        res.redirect('/show');       
    });
})
// Starting the server
app.listen(port, () => {
    console.log("Server started.");
});