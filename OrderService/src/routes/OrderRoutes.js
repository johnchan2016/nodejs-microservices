const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");

router.post("/calculate", OrderController.calculate);

module.exports = router;