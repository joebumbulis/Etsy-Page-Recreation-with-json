var settings = {
  type: 'GET',
  url: 'https://api.etsy.com/v2/listings/active.js?api_key=6j724s1uqw3rdypyrfq9lt96&keywords=woodworking&includes=Images,Shop',
  dataType: 'jsonp'
};

function callback(data, status, xhr) {
    // console.dir(data.results);
    var items = data.results;
    console.log(items);
    var searchResults = items.map(function(item, i, arr){
      return {
        image: item.Images[0].url_170x135,
        title: item.title,
        shop: item.Shop.shop_name,
        price: item.price
      };

    })
    console.log(searchResults);

};

$.ajax(settings).then(callback);
