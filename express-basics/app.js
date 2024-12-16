const express = require("express");
const cors = require("cors");
require("express-async-errors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const productRoutes = require("./routes/product.route");
const authRoutes = require("./routes/auth.route");
const stripe = require("stripe")(
  "sk_test_51M2ALFFEon6AQRRqZGoTHmXZFVSKoxQVoFRYpjpHMNeZ7CuWF2i2MEuVXCLDRGceLSR9Fh1tjLQp5aUK76gEHyX100Oz1EleVm"
);

const Order = require("./models/Order");

const app = express();
const port = 3000;

connectDB();

app.use(express.static("uploads"));

app.use(cors());
app.use(cookieParser());

// move the request handler logic to order controller
const endpointSecret =
  "whsec_4e432bec602c524f16450de5d256b34138cbecf1397183ae80e77a02d2664d3e";
app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (request, response) => {
    const sig = request.headers["stripe-signature"];
    const event = stripe.webhooks.constructEvent(
      request.body,
      sig,
      endpointSecret
    );

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const { orderId } = event.data.object.metadata;
        console.log({ orderId });
        await Order.updateOne({ _id: orderId }, { status: "completed" });
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

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
