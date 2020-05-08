function ajax(src, callback){
  
    var xhr = new XMLHttpRequest();
    xhr.open( 'GET', src , false);
    xhr.onload = function(){
        callback(this.responseText);
    }; 
    xhr.send();
};

function render(data){
    var data = JSON.parse(data);
    console.log(data);
    // let list = document.getElementById("list");
    // list.innerHTML="";
    // let device;
	// 	for(let i=0;i<data.length;i++){
	// 		device = data[i];
	// 		list.innerHTML += device.name + "<br/>" + device.price + "<br/>" + device.description + "<br/>";
	// 	}
};

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){ 
     render(response);
}); 