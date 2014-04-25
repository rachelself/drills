(function(){
  'use strict';

  $(document).ready(init);

  function init()
  {
    $('#get').click(getPosition);
  }

  function getPosition()
  {
    var symbol = $('#symbol').val().trim().toUpperCase();
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, function(data){
      var shares = $('#shares').val().trim();
      debugger;
      makeDiv(data, shares);


    });
  }

  function makeDiv(data, shares)
  {
    var $shareDiv = $('<div class="share">Shares: '+shares+'</div>');
    var $priceDiv = $('<div class="price">Price: $'+data.LastPrice+'</div>');
    var p = shares * data.LastPrice;
    var $positionDiv = $('<div class="position">Position: $'+p+'</div>');
    var $largeDiv = $('<div></div>');

    $($largeDiv).append($shareDiv);
    $($largeDiv).append($priceDiv);
    $($largeDiv).append($positionDiv);

    $('#container').append($largeDiv);
  }




})();
