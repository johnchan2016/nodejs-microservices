const Order = require("../models/Order");

function OrderService() {
  return {
    calculate: (data) => Order.calculate(data),
  };
}

module.exports = OrderService();