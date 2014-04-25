(function(){
  'use strict';

  $(document).ready(init);


  function init()
  {
    $('#get').click(go);
  }

  function go()
  {
    var symbols = $('#symbol').val().trim().toUpperCase().split(',').map(strip);
    // console.log(symbols);
    var urls = symbols.map(getUrls);
    // console.log(urls);

    var prices = urls.map(jSon);
    //debugger;
    console.log(prices);


  }


  function strip(x)
  {
    return x.trim();
  }

  function getUrls(symbol)
  {
    return 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
  }

  // function sum()
  // {
  //   var quotes = [];
  //   quotes.push(jSon());
  //   debugger;
  //   console.log(quotes);
  //
  // }

  function jSon(urls)
  {
    var price = [];

    $.getJSON(urls, function(data){

      price.push(data.LastPrice);
      debugger;
      return price;

    });
  }




})();
