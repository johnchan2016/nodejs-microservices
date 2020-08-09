const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const BookRoutes = require("./src/routes/BookRoutes");
const port = 3001;

// parse application/json
app.use(BodyParser.json());

app.get('/healthz', (req, res) => {
  res.send('BookService Healthy');
});
app.use("/api/book", BookRoutes);

app.set("port", port);

app.listen(app.get("port"), () => {
  console.log(`Book server started and listen on ${port}`);
});