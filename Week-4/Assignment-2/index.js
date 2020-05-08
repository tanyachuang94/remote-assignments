function ajax(src, callback){
    var xhr = new XMLHttpRequest();
    xhr.open( 'GET', 'src' , false);
    // var data = xhr.responseText;
    xhr.send();
    console.log(src);
   
};

// function render(data){
//     list.innerHTML="";
//     let device;
// 		for(let i=0;i<data.length;i++){
// 			device = data[i];
// 			list.innerHTML += device.name + "<br/>" + device.price + "<br/>" + device.description + "<br/>";
// 		}
// };

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){ 
     render(response);
}); 