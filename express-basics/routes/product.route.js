const express = require("express");
const router = express.Router();

const {
  getProductById,
  deleteProduct,
  updateProduct,
  getProducts,
  addProduct,
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.post("/", addProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/:id", getProductById);

module.exports = router;
