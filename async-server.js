let express = require('express');
let bodyParser=require('body-parser');
let ZipcodeToBarcode = require('../posnat/core/zipCodeTranslate');
let app = express();
//app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/',function (req, res) {
    res.sendfile("./async-index.html");
});
app.post('/zipcode',function (req, res) {
    let translator = new ZipcodeToBarcode();
    console.log(req.body.zipcode);
    let hascode=translator.checkeFormatZip(req.body.zipcode);
    console.log(hascode);
    let text=translator.execute(req.body.zipcode)._message;
    console.log(text);
    if(hascode===false){
        res.send("您输入的结果有误，请重新输入。");
    }else {
        res.send("转码结果是："+text);
    }
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});