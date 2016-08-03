var express = require('express');
var app = express();
var route=require("../posnat/route/route-class");
app.get('/', function (req, res) {
    res.send(new route().execute("12345"));
});

var server = app.listen(3002, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

