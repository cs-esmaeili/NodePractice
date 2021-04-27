const express = require("express");
const path = require("path");
const rootpath = require("../utils/path");

const router = express.Router();

router.get("/test", function (req, res) {
  var temp = path.join(rootpath, "views", "api.html");
  res.sendFile(temp);
});

module.exports = router;
