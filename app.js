var bodyParser = require("body-parser");
var cors = require("cors");
var express = require("express");
var controllers = require("./controllers");

var app = express();

app.use(bodyParser.json());

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/api", controllers);

var server = app.listen(process.env.NODE_APPLICATION_PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
