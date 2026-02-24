const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const port = 3000;
const bodyParser = require("body-parser");

const app = express();
const db = new sqlite3.Database("./todolist.db");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  db.all("SELECT * FROM todos", [], (err, rows) => {
    res.render("main", { data: rows });
  });
});

app.get("/addtodo", (req, res) => {
  res.sendFile(__dirname + "/public/addtodo.html");
});

app.post("/api/todos", (req, res) => {
  const { title, description, deadline } = req.body;
  db.run(
    `INSERT INTO todos (title, description, deadline, status)
         VALUES (?, ?, ?, 0)`,
    [title, description, deadline],
    function (err) {
      if (err) return res.json(err);
      res.redirect("/");
    },
  );
});

app.put("/api/todos/:id", (req, res) => {
  const id = req.params.id;
  const { status } = req.body;

  db.run(
    `UPDATE todos SET status = ? WHERE id = ?`,
    [status, id],
    function (err) {
      if (err) return res.json(err);
      res.json({ message: "Updated" });
    },
  );
});

app.listen(port, () => {
  console.log(`Starting server at port ${port}`);
});
