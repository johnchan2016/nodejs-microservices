const express = require("express");
const router = express.Router();
const BookController = require("./../controller/BookController");

router.get("/list", BookController.list);
router.get("/get:id", BookController.get);
router.post("/add", BookController.add);

module.exports = router;