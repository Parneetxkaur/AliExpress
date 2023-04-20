const spaceId = 'egctim46mz60';
const accessToken = '0tqnhTqjbnO4cBaxV6DKC5EcQD3TgrkEZ5tU9Jt559M';

var gallery = document.getElementById('gallery');
contentful.createClient({
  space: spaceId,
  accessToken: accessToken
}).getEntries({content_type: 'products'}).then(function(entries) {
  entries.items.forEach(entry => {
    console.log(entry);
    var product = document.createElement('div');
    product.classList.add('product');
    gallery.appendChild(product);

    var detailsLink = document.createElement('a');
    detailsLink.href = 'details.html?id='+entry.sys.id;
    product.appendChild(detailsLink);

    var galleryImage = document.createElement('img');
    if (entry.fields.image) {
      galleryImage.src = 'https:' + entry.fields.image.fields.file.url;
      console.log(galleryImage.src);
      galleryImage.classList.add('gallery-image');
      detailsLink.appendChild(galleryImage);
    }

  });

  var viewMoreBtn = document.getElementById("view-more-btn");
viewMoreBtn.addEventListener("click", function() {
  // Add your code to load more content here
});


}).catch(function(error) {
  console.log(error);
});


