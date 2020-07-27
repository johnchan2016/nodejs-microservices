const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const CatalogRoutes = require("./src/routes/CatalogRoutes");
const port = 3002;

// parse application/json
app.use(BodyParser.json());

app.use("/api/catalog", CatalogRoutes);

app.set("port", port);

app.listen(app.get("port"), () => {
  console.log(`Catalog server started and listen on ${port}`);
});