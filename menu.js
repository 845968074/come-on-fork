let express = require('express');
let app = express();
app.get('/', function (req, res) {
    res.sendfile('./menu.html');

});
app.get('/menu', function (req, res) {
    let list=req.query.name;
    console.log(list);
    /*res.send("1. Translate zip code to bar code\n"+ "2. Translate bar code to zip code\n"+
    "3. Quit\n"+ "Please input your choices(1~3)\n");*/
    if(req.query.first)
   res.send("Please input zip code:");
    else if(req.query.second)       res.sendfile('./index.html');
//res.send("Please input bar code:"));
    else if(req.query.third) res.send("Quit");


});
app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});