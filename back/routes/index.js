const express = require("express");
const router = express.Router();
const users = require("./users");
const products = require("./products");
const Cart = require("./carts");
const cartProduct = require("./cartProducts");
const orders = require("./orders");
const admins = require("./admins");
const search = require("./search");

router.use("/users", users);
router.use("/products", products);
router.use("/cart", Cart);
router.use("/cart-products", cartProduct);
router.use("/orders", orders);
router.use("/admin", admins);
router.use("/search", search);

module.exports = router;
