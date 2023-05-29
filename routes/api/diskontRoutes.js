const express = require("express");
const diskontsRouter = express.Router();

const controllers = require("../../controllers");
const { authenticate } = require("../../middlewares");
const ctrlWrapper  = require("../../helpers/ctrlWrapper");


diskontsRouter.get("/", ctrlWrapper(controllers.getAllDiskonts));

diskontsRouter.post("/", ctrlWrapper(controllers.addDiskont));

diskontsRouter.delete("/:id", ctrlWrapper(controllers.deleteDiskont));

module.exports = diskontsRouter;
