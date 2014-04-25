(function(){
  'use strict';

  $(document).ready(init);


  function init()
  {
    $('#get').click(go);
  }

  function go()
  {
    var symbols = getSymbols();
    var urls = symbols.map(getUrls);

    symbols.map(makeRows);
    urls.map(jSon);
  }

    // update()
    // {
    //   var update = setInterval(checkUpdate, 1000);
    // }

  // function checkUpdate()
  // {
  //   console.log(symbols);
  //   debugger;
  //   // var newPrice;
  //   // getUrls(symbol);
  //   //
  //   // $.getJSON(urls, function(data, symbol){
  //   //
  //   //   var oldPrice = $('td.symbol:contains('+symbol+')').next().text();
  //   //   console.log(oldPrice);
  //   //
  //   //   newPrice = data.LastPrice;
  //   //
  //   //
  //   //   if(oldPrice !== newPrice)
  //   //   {
  //   //     $('td.symbol:contains('+data.Symbol+')').next().text(newPrice);
  //   //   }
  //   //   console.log(newPrice);
  //
  //   // });
  // }


  function getSymbols()
  {
    var input = $('#symbols').val().trim().toUpperCase().split(',').map(strip);
    return input;
  }

  function strip(x)
  {
    return x.trim();
  }

  function getUrls(symbol)
  {
    return 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
  }



  function makeRows(symbols)
  {

    for(var i = 0; i < 1; i++)
    {
      var $tr = $('<tr></tr>');

        for(var x = 0; x < 1; x++)
        {
          var $symbol = $('<td class="symbol">'+symbols+'</td>');
          var $quote = $('<td class="quote"></td>');

          $($tr).append($symbol);
          $($tr).append($quote);
          $('#box > tbody').append($tr);

        }

    }
  }

  function jSon(url, index)
  {
    var price;

    $.getJSON(url, function(data){

      price = data.LastPrice;
      debugger;

      $('#box > tbody > tr:nth-child('+(index+1)+') > td.quote').text(price);

    });

  }

  // function checkUpdates(symbols)
  // {
  //
  // }

})();
