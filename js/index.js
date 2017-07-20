function addToCart(item,cost) {
  var x = document.getElementById("storeInventory");
  var text = item;
  var cost = Number(cost);
  
var shoppingCart = [];

for(var i=0; i< shoppingCart.lengh; i++){
    shoppingCart[i] = new shoppingCart("Item-" + i, "Price" + i);
}
 
  document.getElementById("item").innerHTML = cost;
}