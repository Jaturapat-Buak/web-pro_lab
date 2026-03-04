const express = require("express");
const session = require("express-session");
const axios = require("axios");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "restaurant",
    resave: false,
    saveUninitialized: true,
  }),
);

app.get("/", async (req, res) => {
  const result = await axios.get(
    "http://webdev.it.kmitl.ac.th:4000/restaurant",
  );

  res.render("menu", { data: result.data });
});

app.get("/add/:id", async (req, res) => {
  const id = req.params.id;

  const result = await axios.get(
    "http://webdev.it.kmitl.ac.th:4000/detail/" + id,
  );

  req.session.cart = req.session.cart || [];

  req.session.cart.push(result.data);

  res.redirect("/");
});

app.get("/cart", (req, res) => {
  const cart = req.session.cart || [];

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  res.render("cart", { cart, total });
});

app.get("/confirm", (req, res) => {
  req.session.cart = [];

  res.redirect("/");
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
