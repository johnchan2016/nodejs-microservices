const express = require("express");
const router = express.Router();
const BookController = require("../controllers/BookController");

router.get("/list", BookController.list);
router.get("/get/:id", BookController.get);
router.post("/getBooks", BookController.getBooks);
router.post("/add", BookController.add);

module.exports = router;