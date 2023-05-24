const express = require("express");
const diskontsRouter = express.Router();

const { authenticate } = require("../../middlewares");

const controllers = require("../../controllers");

diskontsRouter.get("/", authenticate, controllers.getAllDiskonts);

diskontsRouter.post("/", controllers.addDiskont);

diskontsRouter.delete("/:id", controllers.deleteDiskont);

module.exports = diskontsRouter;
