const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
const Product = mongoose.model("Product", productSchema);

// { name, price, user: "token bata ako id" }

module.exports = Product;
