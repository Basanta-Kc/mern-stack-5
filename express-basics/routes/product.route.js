const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const {
  getProductById,
  deleteProduct,
  updateProduct,
  getProducts,
  addProduct,
} = require("../controllers/product.controller");

const checkAuth = (req, res, next) => {
  try {
    const decoded = jwt.verify(req.headers.token, "secret");
    req.test = " hello";
    req.authUser= decoded;
    console.log({ decoded });
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

router.get("/", getProducts);
router.post("/", checkAuth,addProduct);
router.patch("/:id", checkAuth, updateProduct);
router.delete("/:id", checkAuth, deleteProduct);
router.get("/:id", getProductById);

module.exports = router;
