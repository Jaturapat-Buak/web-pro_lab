const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3000;

// connect database
let db = new sqlite3.Database("userdata.db", (err) => {
  if (err) return console.error(err.message);
  console.log("Connected to SQLite database.");
});

// static + view engine
app.use(express.static("public"));
app.set("view engine", "ejs");

// -----------------------------
// USERS LIST
// -----------------------------
app.get("/", (req, res) => {
  db.all("SELECT * FROM users", (err, rows) => {
    if (err) return console.log(err.message);
    res.render("show", { data: rows });
  });
});

// -----------------------------
// USER DETAIL (มี id)
// -----------------------------
app.get("/detail/:id", (req, res) => {
  const id = req.params.id;

  db.get("SELECT * FROM users WHERE id = ?", [id], (err, row) => {
    if (err) return console.log(err.message);

    res.render("detail", { user: row });
  });
});

// start server
app.listen(port, () => {
  console.log("Server started at http://localhost:3000");
});
