(function(){
  'use strict';

  $(document).ready(init);

  function init()
  {
    $('#get').click(getQuote);
  }

  function getQuote()
  {
    var symbol = $('#symbol').val().trim().toUpperCase();
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, function(data){
      makeDiv(data);


    });
  }

  function makeDiv(data)
  {
    var $symbolDiv = $('<div class="symbol">'+data.Symbol+'</div>');
    var $companyDiv = $('<div class="company">'+data.Name+'</div>');
    var $lastpriceDiv = $('<div class="price">'+data.LastPrice+'</div>');
    var $largeDiv = $('<div class="large">'+'</div>');
    $($largeDiv).append($symbolDiv);
    $($largeDiv).append($companyDiv);
    $($largeDiv).append($lastpriceDiv);
    $('#container').append($largeDiv);
    debugger;
  }

// $('.symbol').text('$' + data.Symbol);
// $('.company').text('$' + data.Name);
// $('.price').text('$' + data.Name);

})();
