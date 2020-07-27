const OrderService = require("../services/OrderService");

function OrderController() {
  const calculate = function (req, res) {
    return OrderService.calculate(req.body).then(data => res.json(data));
  };

  return {
    calculate: calculate,
  };
}

module.exports = OrderController();