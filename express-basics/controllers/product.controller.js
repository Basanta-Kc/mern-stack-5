const Order = require("../models/Order");
const Product = require("../models/Product");
const stripe = require("stripe")(
  "sk_test_51M2ALFFEon6AQRRqZGoTHmXZFVSKoxQVoFRYpjpHMNeZ7CuWF2i2MEuVXCLDRGceLSR9Fh1tjLQp5aUK76gEHyX100Oz1EleVm"
);

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
  // todo: delete image from upload folde when we delete product
  // hint: fetch product detail get the image name and use fs.unlink() function to delte image

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
// Todo: create orders contorller and move createOrder, getOrders, and stripe webhoook code to controller
const createOrder = async (req, res) => {
  const { products } = req.body;

  let total = 0;
  const line_items = [];
  for (let product of products) {
    const dbProduct = await Product.findOne({ _id: product._id });
    product.price = dbProduct.price;
    total += product.quantity * product.price;
    const price = await stripe.prices.create({
      currency: "usd",
      unit_amount: product.price * 100,
      product_data: {
        name: dbProduct.name,
      },
    });
    line_items.push({
      price: price.id,
      quantity: product.quantity,
    });
  }

  // await Order.create({
  //   user: req.authUser._id,
  //   products,
  //   total,
  // });

  const order = new Order({
    user: req.authUser._id,
    products,
    total,
  });

  const { _id: orderId } = await order.save();

  const session = await stripe.checkout.sessions.create({
    success_url: "http://localhost:5173/success",
    line_items,
    mode: "payment",
    metadata: {
      orderId: orderId.toString(),
    },
  });

  res.json({
    message: "Order places succesfully,",
    url: session.url,
  });
};

const getOrders = async (req, res) => {
  const { limit, page, status } = req.query;
  console.log(req.authUser);
  const filter = {
    // while doing this for dasbhoard remove the user filter
    user: req.authUser._id,
  };

  if (status) {
    filter.status = status;
  }
  console.log(filter);

  const orders = await Order.find(filter)
    .limit(limit)
    .skip((page - 1) * limit);

  const total = await Order.countDocuments(filter);

  res.json({
    total,
    data: orders,
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
  getOrders,
  getFeaturedProducts,
};
