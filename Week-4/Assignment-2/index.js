const express = require('express');
const app = express();

function ajax(src, callback){
    app.get (src, callback){
        // request(
        //     url: ,
        //     method: 'GET',
        //  );
        console.log(body);
        response.end(JSON.stringify(body));
        }
};
// function render(data){
    // your code here.
    // document.createElement() and appendChild() methods are preferred.
// }
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){ 
    render(response);
    }); // you should get product information in JSON format and render data in the page