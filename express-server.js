
let express = require('express');
let bodyParser = require("body-parser");
let BarcodeToZipcode = require('../posnat/core/barcodetranslateZipCode');
let ZipcodeToBarcode = require('../posnat/core/zipCodeTranslate');
let Route = require('../posnat/route/route-class');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*app.get('/', function (req, res) {
    res.sendfile('./express-index.html');

});

app.post('/result2', function (req, res) {

    let code = req.body.code;
    let route = new Route().execute(code);
    res.send(route);
});*/


app.get('/result', function (req, res) {
    let code = req.body.code;
    /*if(code==="1")
    {
        res.send("please input zip code: ");
    }
    else if(code==="2")  {res.send("please input bar code:");}
    else {    console.log("code : " +code);*/
        let barcodeTranslater = new BarcodeToZipcode();
        let typeBarcode = barcodeTranslater.checkFormatBarcodes(code);
        let zipcodeTranslater = new ZipcodeToBarcode();
        let typeZipcode = zipcodeTranslater.checkeFormatZip(code);
       // console.log("typeBarcode: "+typeBarcode+"typeZipcode:"+typeZipcode);
        if (typeZipcode != false) {
            res.send("转码结果是：" + zipcodeTranslater.execute(code)._message);

        } else if (typeBarcode != false) {
            res.send("转码结果是：" + barcodeTranslater.execute(code)._message);

        }
        else {
            res.send("您输入的结果有误，请重新输入。");
        }
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});