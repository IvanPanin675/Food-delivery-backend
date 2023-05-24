const { HttpError } = require("../../helpers");
const { Order } = require("../../models");
const { User } = require("../../models");

const getAllOrders = async (req, res) => {
  const { email } = req.query;

  const authUser = await User.find({ email })
  
  if (authUser.password) {
    throw HttpError(401);
  }

  const data = await Order.find({ owner: email });
  
  if (!data) {
    throw HttpError(404, "Your not have order");
  }

  res.status(200).json(data);
};

module.exports = getAllOrders;
