const express = require("express");
const router = express.Router();
const {
  getProducts,
  deleteProduct,
  updateProduct,
  getProduct,
  createProduct,
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
