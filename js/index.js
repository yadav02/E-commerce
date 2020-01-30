function createClothCard(obj) {
    var productCard = document.createElement('div');
    productCard.className = "product-card";

    var productImg = document.createElement('img');
    productImg.className = "product-img";
    productImg.src = obj.preview;
    productCard.appendChild(productImg)

    var productTitle = document.createElement('h4');
    productTitle.className = "title";
    productTitle.innerHTML = obj.name;
    productCard.appendChild(productTitle)

    var productBrand = document.createElement('p');
    productBrand.className = "product-brand";
    productBrand.innerHTML = obj.brand;
    productCard.appendChild(productBrand)

    var productPrice = document.createElement('p');
    productPrice.className = "product-price"
    productPrice.innerHTML = 'Rs ' + obj.price;
    productCard.appendChild(productPrice)

    productCard.onclick = function() {
        localStorage.setItem('id', obj.id);
        console.log(obj.id);
        location.assign("./productDetails.html");
    }

    return productCard;
}
function createAccessoryCard(obj) {
    var accessoryCard = document.createElement('div');
    accessoryCard.className = "product-card";
    
    var accessoryImg = document.createElement('img');
    accessoryImg.className = "product-img";
    accessoryImg.src = obj.preview;
    accessoryCard.appendChild(accessoryImg);
    
    var accessoryTitle = document.createElement('h4');
    accessoryTitle.className = "title";
    accessoryTitle.innerHTML = obj.name;
    accessoryCard.appendChild(accessoryTitle)
    
    var accessoryBrand = document.createElement('p');
    accessoryBrand.className = "product-brand";
    accessoryBrand.innerHTML = obj.brand;
    accessoryCard.appendChild(accessoryBrand)
    
    var accessoryPrice = document.createElement('p');
    accessoryPrice.className = "product-price"
    accessoryPrice.innerHTML = 'Rs ' + obj.price;
    accessoryCard.appendChild(accessoryPrice);

    accessoryCard.onclick = function() {
        localStorage.setItem('id', obj.id);
        location.assign("./productDetails.html")
    }

    return accessoryCard;
}
var cart = localStorage.getItem("cart");

if(cart === undefined || cart === null) {
    cart = 0;
}

var cartItems = document.getElementById("number-of-items");
cartItems.innerHTML = cart;

localStorage.setItem("cart", cartItems.innerHTML);

var clothSection = document.getElementById('cloth-section');
var accessorySection = document.getElementById('accessory-section');

var api = 'https://5d76bf96515d1a0014085cf9.mockapi.io/product';
var xhttp = new XMLHttpRequest();
xhttp.open('Get', api , true);
xhttp.onreadystatechange = function() {
    if(this.readyState === 4) {
        var data = JSON.parse(this.responseText);
        for(var i=0; i<data.length; i++) {
            if(data[i].isAccessory === false)
                clothSection.appendChild(createClothCard(data[i]));
            else
                accessorySection.appendChild(createAccessoryCard(data[i]));
        }
    }
}
xhttp.send();

