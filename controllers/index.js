var express = require("express");
var router = express.Router();
var sampleRoutes = require("./sample")

router.use("/employees", sampleRoutes);

module.exports = router;
