const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

const db = new sqlite3.Database("customers.db");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// (A) สุ่มอ่านข้อมูลจาก database 1 รายการ
app.get("/", (req, res) => {
  db.get("SELECT * FROM customers ORDER BY RANDOM() LIMIT 1", (err, row) => {
    if (err) throw err;

    res.render("employee", { data: row });
  });
});

// (B) Save Data → เก็บ cookie และล้างฟอร์ม
app.post("/save", (req, res) => {
  res.cookie("emp", req.body);

  res.render("employee", { data: {} });
});

// (C) Show Data → เอาข้อมูลจาก cookie
app.get("/show", (req, res) => {
  let data = req.cookies.emp || {};

  res.render("employee", { data: data });
});

// (D) Clear Data → ลบ cookie และล้างฟอร์ม
app.get("/clear", (req, res) => {
  res.clearCookie("emp");

  res.render("employee", { data: {} });
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
