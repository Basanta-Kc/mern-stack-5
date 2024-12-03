const express = require("express");
const cors = require("cors");
require("express-async-errors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/product.route");
const authRoutes = require("./routes/auth.route");

const app = express();
const port = 3000;

connectDB();

app.use(express.static("uploads"));

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  // save the error somewhere
  console.log(err);
  res.status(500).json({
    message: "something went wrong",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Error Handling (done)
// file halding (done)
//  get products api
// search, gte and lte
// const filter = { name: new RegExp(req.query.search) };
// if (req.query.minPrice && req.query.maxPrice) {
//   filter.price = { $gte: req.query.minPrice, $lte: req.query.maxPrice };
// }
// order model
// const order = {
//     user: "2",
//     totalPrice: 100,
//     products: [
//         {
//             product: 1,
//             quantiy: 2
//         },
//         {
//             product: 1,
//             quantiy: 2
//         },
//     ]
// }
// const OrderSchema = new mongoose.Schema(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     products: [
//       {
//         product: {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: "Product",
//           required: true,
//         },
//         quantity: { type: Number, required: true, default: 1 },
//       },
//     ],
//     totalPrice: { type: Number, required: true },
//     status: {
//       type: String,
//       enum: ["pending", "completed", "cancelled"],
//       default: "pending",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );
// create order api.
