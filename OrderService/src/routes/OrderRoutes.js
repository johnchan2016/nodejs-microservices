const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");

router.get("/calculate", OrderController.calculate);

module.exports = router;