const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// เชื่อม DB
let db = new sqlite3.Database("orders.db", (err) => {
  if (err) return console.error("DB Error:", err.message);
  console.log("Connected to orders database.");
});

// แสดงข้อมูล
app.get("/", (req, res) => {
  db.all("SELECT * FROM orders", (err, rows) => {
    if (err) return res.send(err.message);
    res.render("show", { data: rows });
  });
});

// เพิ่ม order
app.post("/add", (req, res) => {
  const { customer, product, address, phone } = req.body;

  db.run(
    `
    INSERT INTO orders (ลูกค้า, สินค้า, ที่อยู่, เบอร์โทร, สถานะ)
    VALUES (?, ?, ?, ?, 'รอดำเนินการ')
    `,
    [customer, product, address, phone],
    (err) => {
      if (err) return res.send(err.message);
      res.redirect("/");
    },
  );
});

// อัปเดตสถานะ
app.post("/update/:id", (req, res) => {
  const id = req.params.id;
  const status = req.body.status;

  db.run(
    `
    UPDATE orders
    SET สถานะ = ?
    WHERE ID = ?
    `,
    [status, id],
    (err) => {
      if (err) return res.send(err.message);
      res.redirect("/");
    },
  );
});

app.listen(port, () => {
  console.log("Server running http://localhost:" + port);
});
