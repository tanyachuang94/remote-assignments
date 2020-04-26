function avg(data) {
    // your code here
    var total = 0;
    for ( i = 0 ; i < data.size ; i +=1 ){
       total += data.products[i].price
        }

    return total / data.size
    // return (data.products[0].price + data.products[1].price + data.products[2].price) / data.size
    }

    console.log( 
        avg({
            size:3, 
            products:[
                {
                name:"Product 1",
                price:100 },
                {
                name:"Product 2",
                price:700 },
                {
                name:"Product 3",
                price:250 }]   
        })
    ) // should print the average price of all products
