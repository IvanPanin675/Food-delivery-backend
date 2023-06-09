const {
  current,
  login,
  logout,
  patchChanges,
  register,
  findUser,
} = require("./auth");
const { getAllDiskonts, addDiskont, deleteDiskont } = require("./diskonts");
const getShops = require("./shops");
const { getAllOrders, addOrder, getAllOrdersAuth } = require("./orders");
const getProducts = require("./products");

module.exports = {
  current,
  login,
  logout,
  patchChanges,
  register,
  getAllDiskonts,
  addDiskont,
  deleteDiskont,
  getShops,
  getAllOrders,
  addOrder,
  getAllOrdersAuth,
  getProducts,
  findUser,
};
