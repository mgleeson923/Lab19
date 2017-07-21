function addToCart(item, cost) {
 // var text = document.getElementById("item");
 var cart = document.getElementById("item");
    var textnode = document.createTextNode(item + " $" + cost);
    var lineBreak = document.createElement("br");
    cart.appendChild(textnode);
    cart.appendChild(lineBreak);
    
}
