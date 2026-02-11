// index.js

const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// เพิ่มใช้งานไฟล์
const conn = require("./database");

// static resourse & template engine
// static resourse
app.use(express.static("public"));
// Set EJS as templating engine
app.set("view engine", "ejs");
// For parsing form data
app.use(express.urlencoded({ extended: true }));

// routing

app.get("/", (req, res) => {
  res.send(
    '<a href = "/create1">Create Table</a><br><a href = "/insert1">Insert Data</a><br><a href = "/showdata">Show Data</a>',
  );
});

app.get("/create1", (req, res) => {
  const sql = `
    CREATE TABLE IF NOT EXISTS Users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(100),
      password VARCHAR(100),
      email VARCHAR(100),
      firstname VARCHAR(100),
      lastname VARCHAR(100),
      age INT,
      address VARCHAR(100),
      phone VARCHAR(100)
    );
  `;

  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
    res.send("Table created successfully");
  });
});

app.get("/insert1", (req, res) => {
  const sql = `
    INSERT INTO Users 
    (username, password, email, firstname, lastname, age, address, phone) 
    VALUES 
    ('john123', '123456', 'john@example.com', 'John', 'Doe', 25, 'Bangkok', '0812345678'),
    ('jane456', 'abcdef', 'jane@example.com', 'Jane', 'Smith', 30, 'Chiang Mai', '0898765432'),
    ('mike789', 'pass789', 'mike@example.com', 'Michael', 'Brown', 28, 'Phuket', '0823456789'),
    ('anna321', 'anna123', 'anna@example.com', 'Anna', 'Johnson', 22, 'Khon Kaen', '0834567890'),
    ('tom654', 'tompass', 'tom@example.com', 'Tom', 'Williams', 35, 'Chonburi', '0845678901'),
    ('lisa987', 'lisa987', 'lisa@example.com', 'Lisa', 'Jones', 27, 'Nakhon Ratchasima', '0856789012'),
    ('david111', 'david111', 'david@example.com', 'David', 'Garcia', 29, 'Ayutthaya', '0867890123'),
    ('emma222', 'emma222', 'emma@example.com', 'Emma', 'Martinez', 24, 'Udon Thani', '0878901234'),
    ('chris333', 'chris333', 'chris@example.com', 'Chris', 'Anderson', 31, 'Hat Yai', '0889012345'),
    ('sarah444', 'sarah444', 'sarah@example.com', 'Sarah', 'Taylor', 26, 'Surat Thani', '0890123456')
  `;

  conn.query(sql, (err, result) => {
    if (err) throw err;
    console.log("10 users inserted");
    res.send("10 users inserted successfully");
  });
});

app.get("/showdata", (req, res) => {
  const sql = "SELECT * FROM Users;";
  conn.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.render("show", { data: result });
  });
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
