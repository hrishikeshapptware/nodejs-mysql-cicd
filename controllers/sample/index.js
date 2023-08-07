var express = require("express");
var router = express.Router();
var handler = require("./handler")

router.get("/create-tables", handler.createTables);

router.get("/", handler.getAllEmployees);

router.post("/", handler.addEmployee);

module.exports = router;
