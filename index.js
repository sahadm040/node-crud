const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route.js");
const app = express();
//----------------------MIDDLEWARE--------------------//

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//----------------------PRODUCT ROUTE--------------------//

app.use("/api/products", productRoute);

app.get("/", function (req, res) {
  res.send("hello sahad your node api is ready");
});

//----------------------DATABASE CONNECTION--------------------//

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
