const request = require('request');
let readlineSync = require('readline-sync');

console.log('Welcome!\n');

let zipcode= readlineSync.question('请输入code:');
const option = {
    url: "http://localhost:3000/zipcode",
    method: "POST",
    json: true,
    body: {'zipcode': zipcode}
};

request(option, function (error, response, body) {
    console.log(body);
});