require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const {
  authRouter,
  noticesRouter,
  friendsRouter,
  newsRouter,
  petsRouter,
} = require("./routes/api");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);
// app.use("/api/notices", noticesRouter);
// app.use("/api/friends", friendsRouter);
// app.use("/api/news", newsRouter);
// app.use("/api/pets", petsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
