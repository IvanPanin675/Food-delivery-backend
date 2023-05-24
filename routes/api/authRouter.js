const express = require("express");

const { validateBody } = require("../../utils");

const userValidation = require("../../schemas/userValidation");
const ctrl = require("../../controllers/auth");
const { authenticate, upload, passport } = require("../../middlewares");

const router = express.Router();

router.post("/register", validateBody(userValidation), ctrl.register);

router.post("/login", validateBody(userValidation), ctrl.login);

router.get("/current", authenticate, ctrl.current);

router.post("/logout", authenticate, ctrl.logout);

router.patch("/", authenticate, ctrl.patchChanges);

module.exports = router;
