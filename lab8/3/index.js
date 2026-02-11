const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let albums = [];

  fs.createReadStream("albums.csv")
    .pipe(
      csv({
        mapHeaders: ({ header }) => header.trim(),
      }),
    )
    .on("data", (row) => {
      albums.push(row);
    })
    .on("end", () => {
      console.log(albums[0]);
      res.render("albums", { albums });
    });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
