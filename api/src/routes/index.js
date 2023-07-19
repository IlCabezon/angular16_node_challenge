const express = require("express");
const router = express.Router();

// controllers
const { getUsers } = require("../controllers");

router.get("/ping", (_, res) => {
  return res.json("pong");
});

router.get("/users", getUsers);

module.exports = router;

