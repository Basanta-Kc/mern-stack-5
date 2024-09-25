const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/55-shop")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

const productSchema = new mongoose.Schema({ name: String, price: Number });
const Product = mongoose.model("Product", productSchema);

let products = [
  {
    id: 1,
    name: "watch",
    price: 100,
  },
  {
    id: 2,
    name: "shoes",
    price: 100,
  },
  {
    id: 3,
    name: "tshirt",
    price: 200,
  },
];

app.get("/products", (req, res) => {
  Product.find().then((products) => {
    res.json({
      data: products,
    });
  });
});

app.get("/products/add", (req, res) => {
  Product.create({
    name: req.query.name,
    price: req.query.price,
  })
    .then(() => {
      res.json({
        message: "product added successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        message: "Sooomething went wrong",
      });
    });
});

app.get("/products/update/:id", (req, res) => {
  // req.query = {name: "pen"}
  Product.updateOne({ _id: req.params.id }, req.query).then(() => {
    res.json({
      message: "product updated succesfully.",
    });
  });
});

app.get("/products/delete/:id", (req, res) => {
  Product.deleteOne({ _id: req.params.id }).then(() => {
    res.json({
      message: "product delelte sucesfully.",
    });
  });
});

app.get("/products/:id", (req, res) => {
  console.log(req.params);
  const product = products.find((product) => product.id === +req.params.id);
  if (!product) {
    res.json({
      message: "Product not found",
    });
    return;
  }

  res.json({
    message: "Product fetched succesfully",
    data: product,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
