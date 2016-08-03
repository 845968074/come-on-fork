let express = require('express');
let BarcodeToZipcode = require("../posnat/core/barcodetranslateZipCode");
let app = express();
app.get('/', function (req, res) {
    res.sendfile('./index.html');

});
app.get('/barcodetozipcode', function (req, res) {
    let code=req.query.Barcode;
    let result = new BarcodeToZipcode();
    let hascode=result.checkFormatBarcodes(code);
    console.log(hascode);
    if(hascode===false) res.send("Please input right input,and return to the last page");
    else  res.send('zipcode is ' +result.execute(code)._message);
});
app.listen(8001, function () {
    console.log('Example app listening on port 8001!');
});
