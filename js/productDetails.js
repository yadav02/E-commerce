var cart = localStorage.getItem("cart");
var id = localStorage.getItem("id");

var mArr = JSON.parse(localStorage.getItem("product"));
if(mArr === null)
var mArr = [];

var count = 0;


var cartItems = document.getElementById("number-of-items");
cartItems.innerHTML = cart;


function productDetails(obj) {
    var prodWrap = document.createElement('div');
    prodWrap.className = "prod-wrap";

    var image = document.createElement('img');
    image.src = obj.preview;
    image.className = "prod-img";

    var prodContent = document.createElement('div');
    prodContent.className = "prod-content";

    var prodName = document.createElement('h1');
    prodName.innerHTML = obj.name;

    var prodBrand = document.createElement('p');
    prodBrand.innerHTML = obj.brand;
    prodBrand.className = "brand-text";

    var priceWrap = document.createElement('div');
    priceWrap.className = "price-wrap";

    var productPriceHeading = document.createElement('p');
    productPriceHeading.innerHTML = "Price: Rs";

    var prodPrice = document.createElement('p');
    prodPrice.innerHTML = obj.price;
    prodPrice.className = "prod-price";

    var prodDescription = document.createElement('p');
    prodDescription.innerHTML = "Description";
    prodDescription.className = "prod-text";

    var productDescription = document.createElement('p');
    productDescription.innerHTML = obj.description;
    productDescription.className = "prod-desc";

    var productPreview = document.createElement('p');
    productPreview.innerHTML = "Product Preview";
    productPreview.className = "prod-text";

    var previewWrap = document.createElement('div');
    previewWrap.className = "preview-wrap";

    var previewDiv = document.createElement('div');
        previewDiv.className = "preview-card";

    var photoArr = obj.photos;

    for(var j=0;j<photoArr.length;j++) {
        var previewImageWrap = document.createElement('div');
        previewImageWrap.className = "previewImg-wrap";
        var previewImg = document.createElement('img');
        previewImg.id = "preview-img";
        previewImg.src = obj.photos[j];
        previewImageWrap.appendChild(previewImg);

        previewDiv.appendChild(previewImageWrap);
    }

    var button = document.createElement('button');
    button.className = "btn";
    button.innerHTML = "Add to Cart";

    priceWrap.appendChild(productPriceHeading);
    priceWrap.appendChild(prodPrice);

    previewWrap.appendChild(previewDiv);

    prodContent.appendChild(prodName);
    prodContent.appendChild(prodBrand);
    prodContent.appendChild(priceWrap);
    prodContent.appendChild(prodDescription);
    prodContent.appendChild(productDescription);
    prodContent.appendChild(productPreview);
    prodContent.appendChild(previewWrap);
    prodContent.appendChild(button);

    prodWrap.appendChild(image);
    prodWrap.appendChild(prodContent);

    button.onclick = function() {
        for(var z=0;z<mArr.length;z++) {
            if(mArr[z].id === obj.id) {
                var position = z;
                break;
            }
        }
        mObj = {"id":obj.id,
                "name":obj.name,
                "preview":obj.preview,
                "price":obj.price,
                "quantity":count}
                if(mObj.id === obj.id) {
                    count= ++count;
                    var payable = count*obj.price;
                    mObj.quantity = count;
                    mObj.payable = payable;
                }
        mArr[z] = mObj;
        localStorage.setItem("product", JSON.stringify(mArr));
        cart = ++cart;
        cartItems.innerHTML = cart;
        localStorage.setItem("cart", cart);
    }
    document.addEventListener('click', function(e) {
        if(e.target.tagName === 'IMG'){
          var parentDiv = e.target.parentElement.parentElement;
        for(let i=0; i < parentDiv.children.length; i++){
            console.log(parentDiv.children[i].children[0].classList.remove('selected'));
            
            
        }
        e.target.classList.add('selected');
        image.src = e.target.src;
      }
    });

    return prodWrap;
}

var api ='https://5d76bf96515d1a0014085cf9.mockapi.io/product';
var xhttp = new XMLHttpRequest();
xhttp.open('Get',api , true);
xhttp.onreadystatechange = function() {
    if(this.readyState === 4) {
        var data = JSON.parse(this.responseText);
        for(var i=0; i<data.length; i++) {
            if(data[i].id === localStorage.getItem("id"))
                main.appendChild(productDetails(data[i]));
        }
    }
}
xhttp.send();
