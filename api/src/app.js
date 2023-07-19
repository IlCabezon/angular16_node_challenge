const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const config = require('dotenv').config

const router = require("./routes");

// routes
config()
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: 200,
  })
);

app.use("/api", router);

module.exports = app;
