const diskontsRouter = require("./diskontRoutes");
const authRouter = require("./authRouter");
const ordersRouter = require("./ordersRouter");
const shopsRouter = require("./shops");
const productsRouter = require("./products");

module.exports = {
  authRouter,
  ordersRouter,
  shopsRouter,
  productsRouter,
  diskontsRouter,
};
