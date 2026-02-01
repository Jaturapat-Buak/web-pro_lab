const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/home.html"));
});

app.get("/kaengsom", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/kaengsom.html"));
});

app.get("/friedchicken", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/kaitord.html"));
});

app.get("/friedegg", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/friedegg.html"));
});

app.get("/kawnarped", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/ped.html"));
});

app.get("/noodle", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/noodle.html"));
});

app.get("/radnar", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/radnar.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}, press Ctrl-C terminate....`);
});
