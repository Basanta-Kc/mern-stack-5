const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middleware/auth.middleware");

const {
  getProductById,
  deleteProduct,
  updateProduct,
  getProducts,
  addProduct,
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.post("/", checkAuth("Admin"), addProduct); // (req,res,next) => {}
router.patch("/:id", checkAuth("Admin"), updateProduct);
router.delete("/:id", checkAuth("Super Admin"), deleteProduct);
router.get("/:id", getProductById);

module.exports = router;
