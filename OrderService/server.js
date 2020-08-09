const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const OrderRoutes = require("./src/routes/OrderRoutes");
const port = 3003;

// parse application/json
app.use(BodyParser.json());

app.get('/', (req, res) => {
  res.send('OrderService Healthy');
});
app.use("/api/order", OrderRoutes);

app.set("port", port);

app.listen(app.get("port"), () => {
  console.log(`Order server started and listen on ${port}`);
});