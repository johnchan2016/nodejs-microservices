const express = require("express");
const router = express.Router();
const CatalogController = require("./../controllers/CatalogController");

router.get("/getAll", CatalogController.getAll);
router.get("/get/:id", CatalogController.getCatalog);
router.post("/getCatalogs", CatalogController.getCatalogs);

module.exports = router;