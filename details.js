var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

const spaceId = 'egctim46mz60';
const accessToken = '0tqnhTqjbnO4cBaxV6DKC5EcQD3TgrkEZ5tU9Jt559M';

var productDetails = document.getElementById('product-details');
productDetails.style.display = 'flex';
productDetails.style.flexDirection = 'column';
productDetails.style.alignItems = 'flex-start';
productDetails.style.padding = '20px';

contentful.createClient({
  space: spaceId,
  accessToken: accessToken
}).getEntry(id).then(function (entry) {
    // logs the entry metadata
    console.log(entry);

    // display the name, image and price of the product
    var name = entry.fields.name;
    var imageUrl = entry.fields.image.fields.file.url;
    var price = entry.fields.price;

    var productTitle = document.createElement('h2');
    productTitle.textContent = name;
    productTitle.style.margin = '0';
    productDetails.appendChild(productTitle);

    var productImage = document.createElement('img');
    productImage.setAttribute('src', 'https:' + imageUrl);
    productImage.style.maxWidth = '100%';
    productDetails.appendChild(productImage);

      // display the description of the product
   var description = entry.fields.description;
   var productDescription = document.createElement('p');
   productDescription.textContent = description;
   productDescription.style.marginTop = '10px';
   productDetails.appendChild(productDescription);

    var productPrice = document.createElement('p');
    productPrice.textContent = 'Price: $' + price;
    productPrice.style.margin = '0';
    productDetails.appendChild(productPrice);

       // display the about of the product
   var about = entry.fields.about;
   var productAbout = document.createElement('p');
   productAbout.textContent = about;
   productAbout.style.marginTop = '10px';
   productDescription.appendChild(productAbout);

    // display the content of the product
    var content = entry.fields.content;
    var productContent = document.createElement('p');
    productContent.textContent = content;
    productContent.style.marginTop = '10px';
    productDescription.appendChild(productContent);

    // display the shipping of the product
    var shipping = entry.fields.shipping;
    var productShipping = document.createElement('p');
    productShipping.textContent = shipping;
    productShipping.style.marginTop = '10px';
    productDescription.appendChild(productShipping);
   
    // display the store of the product
    var store = entry.fields.store;
    var productStore = document.createElement('p');
    productStore.textContent = store;
    productStore.style.marginTop = '10px';
    productDescription.appendChild(productStore);

      // display the link of the product
      var link = entry.fields.link;
      var productLink = document.createElement('p');
      productLink.textContent = link;
      productLink.style.marginTop = '10px';
      productDescription.appendChild(productLink);
      productLink.style.color = '#F89817';
productLink.style.textDecoration = 'underline';
productLink.style.cursor = 'pointer';
productLink.addEventListener('mouseover', function() {
  productLink.style.textDecoration = 'none';
});
productLink.addEventListener('mouseout', function() {
  productLink.style.textDecoration = 'underline';
});

    var buyButton = document.createElement('button');
    buyButton.innerText = 'Buy Item';
    buyButton.addEventListener('click', function() {
      // perform buy action here
      console.log('Buy button clicked!');
  });
  buyButton.style.marginTop = '20px';
  productDetails.appendChild(buyButton);  
});
