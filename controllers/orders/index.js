const { ctrlWrapper } = require("../../helpers");

const getAllOrders = require("./getAllOrders");
const addOrder = require("./addOrder");
const getAllOrdersAuth = require("./getAllOrdersAuth");

module.exports = {
  getAllOrders: ctrlWrapper(getAllOrders),
  addOrder: ctrlWrapper(addOrder),
  getAllOrdersAuth: ctrlWrapper(getAllOrdersAuth)
};
