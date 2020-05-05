const express = require('express');
const app = express();

function ajax(src, callback){
    app.get (src, function (req , res) {
        console.dir(req.protocol)
        res.send("Hello, I'm Tanya.");
    });
}
// function render(data){
    // your code here.
    // document.createElement() and appendChild() methods are preferred.
// }
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){ 
    render(response);
    }); // you should get product information in JSON format and render data in the page