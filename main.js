var settings = {
  type: 'GET',
  url: 'https://api.etsy.com/v2/listings/active.js?api_key=6j724s1uqw3rdypyrfq9lt96&keywords=woodworking&includes=Images,Shop',
  dataType: 'jsonp'
};

function callback(data, status, xhr) {
    // console.dir(data.results);
    var items = data.results;
    // console.log(items);
    var searchResults = items.map(function(item, i, arr){
      return {
        image: item.Images[0].url_170x135,
        title: item.title,
        shop: item.Shop.shop_name,
        price: item.price


      };
    });
  // console.log(searchResults);

  searchResults.forEach(function(item, i, arr){
    var pageResults = $('#search-page-results');
    console.log(pageResults);
    var card = $('<li class="product-container"><img class="search-img" src="images/il_570xN.634962874_s08s.jpg" alt=""><h3 class="product-title">List Name with so much info that it spills into the container</h3><h4 class="producer-name">Maker Name whom is also way too long to fit</h4><h5 class="price">Price</h5></li>');
    // pageResults.append('<li class="product-container"><img class="search-img" src="" alt=""><h3 class="product-title"></h3><h4 class="producer-name"></h4><h5 class="price"></h5></li>')
    // pageResults.append('<li class="product-container"></li>').append('<img class="search-img" src="'+ item.image +'" alt="">'),
    pageResults.append(card)

    card.find('.search-img').attr('src', item.image);
    card.find('.product-title').html(item.title);
    card.find('.producer-name').html(item.shop);
    card.find('.price').html(item.price);


// // adding new element    var jqueryElement = $('<elementName>Some content</elementName>');
// // setting content :
// //    element.innerText = 'some content'; //writing
  })
};

$.ajax(settings).then(callback);
