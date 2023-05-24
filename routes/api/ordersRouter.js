const express = require("express");
const ordersRouter = express.Router();

const { authenticate } = require("../../middlewares");

const controllers = require("../../controllers");

ordersRouter.get("/", controllers.getAllOrders);

// ordersRouter.get("/auth", authenticate, controllers.getAllOrdersAuth);

ordersRouter.post("/", controllers.addOrder);


module.exports = ordersRouter;
