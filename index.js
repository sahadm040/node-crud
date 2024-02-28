const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const app = express();
app.use(express.json());
app.get("/", function (req, res) {
  res.send("hello sahad your node api is ready");
});
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://sahadm040:xgXzN0knu9bUh6JL@backenddb.ffkdepr.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDb"
  )
  .then(() => {
    console.log("connected to database !");
    app.listen(3000, () => {
      console.log("server is running on the port 3000");
    });
  })
  .catch(() => {
    console.log("database connection failed !!!");
  });
