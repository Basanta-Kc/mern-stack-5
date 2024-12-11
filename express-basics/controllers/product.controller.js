const Order = require("../models/Order");
const Product = require("../models/Product");

const getProducts = async (req, res) => {
  const { limit, page, search } = req.query;
  const sort = {};

  if (req.query.priceOrder) {
    sort.price = req.query.priceOrder;
  }

  // page = 1 = skip = 0
  // page 2 = skip = 5 (limit = 5)
  // page 3 = skiep = 10 (limit = 5)

  // skip = (page -1) * limit
  const filter = {};

  if (search) {
    // name like %test%
    filter.name = new RegExp(search);
  }

  if (req.query.minPrice && req.query.maxPrice) {
    filter.price = {
      $gte: req.query.minPrice,
      $lte: req.query.maxPrice,
    };
  }

  const products = await Product.find(filter)
    .sort(sort)
    .limit(limit)
    .skip((page - 1) * limit); // -1,1, asc, desc

  const total = await Product.countDocuments(filter);

  res.json({
    total,
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
    image: req.file.filename,
    price: req.body.price,
    user: req.authUser._id,
    featured: req.body.featured,
  });
  res.json({
    message: "product added successfully",
  });
};

const updateProduct = async (req, res) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
    user: req.authUser._id,
    featured: req.body.featured,
  };

  if (req?.file?.filename) {
    product.image = req.file.filename;
  }

  await Product.updateOne({ _id: req.params.id }, product);
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

const getFeaturedProducts = async (req, res) => {
  const featuredProducts = await Product.find({ featured: true }).limit(4);
  res.json({
    data: featuredProducts,
  });
};

// todo: getLatesProducts  Produc.find().sort({createdAt: "desc"}).limit(4)

const createOrder = async (req, res) => {
  const { products } = req.body;

  let total = 0;
  for (let product of products) {
    const dbProduct = await Product.findOne({ _id: product._id });
    product.price = dbProduct.price;
    total += product.quantity * product.price;
  }

  await Order.create({
    user: req.authUser._id,
    products,
    total,
  });

  res.json({
    message: "Order places succesfully,",
  });
};
// products: {id, quantity, price}
module.exports = {
  getProductById,
  deleteProduct,
  updateProduct,
  getProducts,
  addProduct,
  createOrder,
  getFeaturedProducts,
};

