const express = require("express");
const router = express.Router();
const BookController = require("./../controller/BookController");

router.get("/list", BookController.list);
router.get("/get:id", BookController.get);
router.post("/add", BookController.add);
router.delete("/delete", BookController.delete);

module.exports = router;