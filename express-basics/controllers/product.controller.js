const jwt = require("jsonwebtoken");
const Product = require("../models/Product");

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json({
    data: products,
  });
};

// const addProduct = async (req, res) => {
//   try {
//     const decoded = jwt.verify(req.headers.token, "secret");
//     console.log({ decoded });
//     await Product.create(req.body);
//     res.json({
//       message: "product added successfully",
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(401).json({
//       message: "Unauthorized",
//     });
//   }
// };

const addProduct = async (req, res) => {
  await Product.create({
    name: req.body.name,
    price: req.body.price,
    user: req.authUser._id,
  });
  res.json({
    message: "product added successfully",
  });
};

const updateProduct = async (req, res) => {
  await Product.updateOne({ _id: req.params.id }, req.body);
  res.json({
    message: "product updated succesfully.",
  });
};

const deleteProduct = async (req, res) => {
  await Product.deleteOne({ _id: req.params.id });
  res.json({
    message: "product delete sucesfully.",
  });
};

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
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
};

module.exports = {
  getProductById,
  deleteProduct,
  updateProduct,
  getProducts,
  addProduct,
};
