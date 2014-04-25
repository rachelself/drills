/* global AmCharts:true */
/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init()
  {
    makeChart();
    $('#get').click(add);
  }

  function add()
  {
    var zip = $('#zip').val().trim();

    var url = 'http://api.wunderground.com/api/bb0daa3d246877f0/conditions/q/'+zip+'/.json?callback=?';
    $.getJSON(url, function(conditions){
      updateWind(conditions);
    });
  }

  function updateWind(conditions)
  {
    var wind = conditions.current_observation.wind_mph;

    chart.arrows[0].setValue(wind);
  }

  var chart;
  function makeChart()
  {
    chart = AmCharts.makeChart('gauge', {
    'type': 'gauge',
    'theme': 'none',
    'axes': [{
        'axisThickness':1,
         'axisAlpha':0.2,
         'tickAlpha':0.2,
         'valueInterval':3,
        'bands': [{
            'color': '#84b761',
            'endValue': 5,
            'startValue': 0
        }, {
            'color': '#fdd400',
            'endValue': 10,
            'startValue': 5
        }, {
            'color': '#cc4748',
            'endValue': 15,
            'innerRadius': '95%',
            'startValue': 10
        }],
        'bottomText': '0 km/h',
        'bottomTextYOffset': -20,
        'endValue': 15
    }],
    'arrows': [{}]
  });
}


})();
