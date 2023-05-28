const { HttpError } = require("../../helpers");
const { Order } = require("../../models");
const { User } = require("../../models");

const getAllOrders = async (req, res) => {

  const data = await Order.find(req.query);
  
  if (!data) {
    throw HttpError(404, "Your not have order");
  }

  res.status(200).json(data);
};

module.exports = getAllOrders;
