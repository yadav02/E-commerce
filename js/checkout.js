var mArr = JSON.parse(localStorage.getItem("product"));

var cart = localStorage.getItem("cart");
var id = localStorage.getItem("id");
var totalPrice = 0;

var cartItems = document.getElementById("number-of-items");

localStorage.setItem("cart", cart);
cartItems.innerHTML = cart;

var checkoutPage = document.createElement('h1');
checkoutPage.className = "checkout-text";
checkoutPage.innerHTML = "Checkout";

var totalItems = document.createElement('h3');
totalItems.className = "item-name";
if(cart === 1)
totalItems.innerHTML = "Total Item: 1";
else
totalItems.innerHTML = "Total Items: " + cart;

var header = document.getElementById('header');

header.appendChild(checkoutPage);
header.appendChild(totalItems);

function cartitem(obj) {
var prodItems = document.createElement('div');
prodItems.className = "prod-item";

var itemWrap = document.createElement('div');
itemWrap.className = "item-wrap";

var imageWrap = document.createElement('div');
imageWrap.className = "img-wrap";
var itemImage = document.createElement('img');
itemImage.className = "item-img";
itemImage.src = obj.preview;

var contentWrap = document.createElement('div');
contentWrap.className = "content-wrap";
var itemName = document.createElement('h3');
itemName.className = "item-name";
itemName.innerHTML = obj.name;

var quantity = document.createElement('p');
quantity.id = "quantity";
quantity.innerHTML ="x" + obj.quantity;

var itemPrice = document.createElement('p');
itemPrice.innerHTML = "Amount: Rs " + obj.payable;
totalPrice = totalPrice + obj.payable;

imageWrap.appendChild(itemImage);
contentWrap.appendChild(itemName);
contentWrap.appendChild(quantity);
contentWrap.appendChild(itemPrice);

itemWrap.appendChild(imageWrap);
itemWrap.appendChild(contentWrap);

prodItems.appendChild(itemWrap);

var total = document.getElementById('total-amount');
total.innerHTML = totalPrice;

return prodItems;
}

var button = document.getElementById('btn');

button.onclick = function() {
    location.assign("./orderConfermation.html");
}

var mainDiv = document.getElementById('main');
console.log(mainDiv);


for(var i=0;i<mArr.length;i++) {
    mainDiv.appendChild(cartitem(mArr[i]));
}