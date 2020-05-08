function ajax(src, callback){
    var url = src;
    var xhr = new XMLHttpRequest();
    xhr.open( 'GET', url , false);
    // var data = JSON.parse(xhr.responseText);
    xhr.send();
    console.log(xhr.responseText);
    // callback();
};

// function render(data){
    // let list = document.getElementById("list");
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