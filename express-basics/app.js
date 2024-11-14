const express = require("express");

const connectDB = require("./config/db");
const productRoutes = require("./routes/product.route");
const authRoutes = require("./routes/auth.route");

const app = express();
const port = 3000;

connectDB();

app.use(express.json());



app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Error Handling
