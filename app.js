var express = require('express');
var app = express();
var zipcode=require("../posnat/command/TranslateZipcodetoBarcodeCommand-class");
var zipcodeGoBarcode=require("../posnat/command/GoToZiptoBarcodepage-class");
app.get('/', function (req, res) {
  console.log("客户访问：");
  res.send(new zipcode(new zipcodeGoBarcode()).execute("12345")._text);
});

var server = app.listen(3002, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
