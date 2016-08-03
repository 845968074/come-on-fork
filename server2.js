let express = require('express');
let zipcodeTobarcode = require("../posnat/core/zipCodeTranslate");
let app = express();
app.get('/', function (req, res) {
    res.sendfile('./index2.html');

});
app.get('/zipcodetobarcode', function (req, res) {
    let code=req.query.zipcode;
    let result = new zipcodeTobarcode();
    let hascode=result.checkeFormatZip(code) ;
    console.log(hascode);
    if(hascode===false) res.send("Please input right input,and return to the last page");
    else  res.send('barcode is ' +result.execute(code)._message);
});
app.listen(8001, function () {
    console.log('Example app listening on port 8001!');
});
