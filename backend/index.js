require("dotenv").config();

const express = require("express");
const product = require("./products");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, res) => {
  res.send(product);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
