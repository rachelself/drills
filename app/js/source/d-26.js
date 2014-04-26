/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init()
  {
    $('#get').click(get);
  }

  function get()
  {
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/bb0daa3d246877f0/forecast10day/q/'+zip+'.json?callback=?';

    $.getJSON(url, function(conditions){
        getForecast(url, conditions);

    });
  }

  function getForecast(url, conditions)
  {
  //console.log(conditions);
    for(var i = 0; i < 10; i++)
    {
      var $img = $('<img>');
      var $div = $('<div>');
      var $weatherDiv = $('<div>');
      var $container = $('<div>');

      $img.attr('src', conditions.forecast.simpleforecast.forecastday[i].icon_url);
      $weatherDiv.append($img);
      $container.append($weatherDiv);
    //debugger;

      $div.text(conditions.forecast.simpleforecast.forecastday[i].date.weekday);
      $div.addClass('day');
      $container.append($div);
      //$div.append($img);

      $('#forecast').append($container);

    }

//

  }

  // function imageUrl()
  // {
  //   console.log(Object.icon_url);
  //   debugger;
  //   //return Object.icon_url;
  // }



})();
