var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
if (xhr.readyState === 4) {
    document.getElementById('list').innerHTML = xhr.responseText;
    var device = JSON.parse(xhr.responseText);
    console.log(device);
    }
};
    
// function ajax(src, callback){
    xhr.open('GET', "https://cwpeng.github.io/live-records-samples/data/products.json");
// }
// function render(data){
//     document.createElement() and appendChild() methods are preferred.
//     xhr.render();
// }

// ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){ 
//     render(response);
// }); 
	 xhr.send(); 	


//===================================================================================

// const express = require('express');
// const app = express();

// function ajax(src, callback){
//     app.get (src, (req, res) => {
//         request(
//             url: src ,
//             method: 'GET',
//          );
//     });
//         console.log(body);
//         response.end(JSON.stringify(body));   
// };
// function render(data){
   
// }
// ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){ 
//     render(response);
//     }); 