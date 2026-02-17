const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3000;

// connect database
let db = new sqlite3.Database("questions.db", (err) => {
  if (err) return console.error(err.message);
  console.log("Connected to SQLite database.");
});

// static + view engine
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  db.all("SELECT * FROM questions", (err, rows) => {
    if (err) return console.log(err.message);
    res.render("show", { data: rows });
  });
});

app.post("/submit", (req, res) => {
  // คำตอบที่ user ส่งมา
  const answers = req.body;

  // ดึงเฉพาะ correct จาก database
  db.all("SELECT QID, correct FROM questions", (err, rows) => {
    if (err) return console.log(err.message);

    let score = 0;
    let total = rows.length;

    rows.forEach((q) => {
      const userAnswer = answers["q" + q.QID];

      if (userAnswer === q.correct) {
        score++;
      }
    });

    res.render("result", {
      score: score,
      total: total,
    });
  });
});

// start server
app.listen(port, () => {
  console.log("Server started at http://localhost:3000");
});
