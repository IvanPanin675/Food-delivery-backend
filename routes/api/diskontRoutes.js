const express = require("express");
const diskontsRouter = express.Router();

const controllers = require("../../controllers");
const { authenticate } = require("../../middlewares");

diskontsRouter.get("/", authenticate, controllers.getAllDiskonts);

diskontsRouter.post("/", controllers.addDiskont);

diskontsRouter.delete("/:id", controllers.deleteDiskont);

module.exports = diskontsRouter;
