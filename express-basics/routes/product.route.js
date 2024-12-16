const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split(".").at(-1);
    cb(null, uniqueSuffix + "." + extension);
  },
});

const upload = multer({ storage: storage });
const { checkAuth } = require("../middleware/auth.middleware");

const {
  getProductById,
  deleteProduct,
  updateProduct,
  getProducts,
  addProduct,
  createOrder,
  getFeaturedProducts,
  getOrders,
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.get("/featured", getFeaturedProducts);
router.post("/", checkAuth(), upload.single("image"), addProduct); // (req,res,next) => {}
router.patch("/:id", checkAuth("Admin"), upload.single("image"), updateProduct);
router.delete("/:id", checkAuth("Admin"), deleteProduct);
router.get("/orders", checkAuth(), getOrders); // api/products/orders
router.get("/:id", getProductById); // api/products/j-value-aye-pani =>getPRoductById
router.post("/order", checkAuth(), createOrder);

module.exports = router;
