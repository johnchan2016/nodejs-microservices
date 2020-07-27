const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const BookRoutes = require("./routes/BookRoutes");
const port = 3000;

// parse application/json
app.use(BodyParser.json());

app.use("/api/book", BookRoutes);

app.set("port", port);

app.listen(app.get("port"), () => {
  console.log(`server started and listen on ${port}`);
});