let promise =new Promise((resolve, reject)=>{});

function placeOrder(orderDetails, callback){
    console.log("Placing order");
    setTimeout(()=>{
        console.log('Order placed for=$(Order Details)');
    })
}
// cola
function orderCola  (callback) {
    SetTime (()=>{
        console.log("Cola");
        callback();
    }, 1500);
}
  
// menu
function orderBigMenu  (callback) {
    SetTime (()=>{
        console.log("Big Menu");
        callback();
    }, 2500);
}

// icecream
function orderIceCream  (callback) {
    SetTime (()=>{
        console.log("Ice cream");
        callback();
    }, 2000);
}

// Big Tasty
function orderBigTasty  (callback) {
    SetTime (()=>{
        console.log("Big Tasty");
        callback();
    }, 4000);
}

// fanta
function orderFanta  (callback) {
    SetTime (()=>{
        console.log("Fanta");
        callback();
    }, 1500);
}

// Naggets
function orderNaggets  (callback) {
    SetTime (()=>{
        console.log("Naggets");
        callback();
    }, 4000);
}

placeOrder("Prepare 1 big menu", function(){
    orderCola(function(){
        orderBigMenu(function(){
            orderBigTasty(function(){
                orderIceCream(function(){
                    orderBigTasty(function(){
                        orderIceCream(function() {
                            orderNaggets(function())
                            {console.log("end");}); 
                        });
                    });
                });
            });
        });
    });

});