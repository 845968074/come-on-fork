let express = require('express');
let bodyParser=require('body-parser');
let barcodeToZipcode = require('../posnat/core/barcodetranslateZipCode');
let app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function (req, res) {
    res.sendfile("./async-index2.html");
});
app.post('/barcode',function (req, res) {
    let translator = new barcodeToZipcode();
    console.log(req.body.barcode);
    let hascode=translator.checkFormatBarcodes(req.body.barcode);
    console.log(hascode);
    if(hascode===false){
        res.send("您输入的结果有误，请重新输入。");
    }else {
        let text=translator.execute(req.body.barcode)._message;
        console.log(translator.execute(req.body.barcode));
        res.send("转码结果是："+text);
    }
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});