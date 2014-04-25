/* global AmCharts:true */
/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init()
  {
    makeGraph();
    $('#add').click(add);
  }

  function add()
  {
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/bb0daa3d246877f0/conditions/q/'+zip+'/.json?callback=?';
    $.getJSON(url, function(data){
      getWeather(data);
    });
  }

  function getWeather(data)
  {
    //console.log(data);
    var weather = {};
    weather.temperature = data.current_observation.temp_f;
    weather.zip = data.current_observation.display_location.full;

    chart.dataProvider.push(weather);
    chart.validateData();
    debugger;
  }

  var chart;

  function makeGraph()
  {
    chart = AmCharts.makeChart('graph', {
    'type': 'serial',
    'theme': 'light',
    'dataProvider': [],
    'valueAxes': [{
        'gridColor':'#FFFFFF',
    'gridAlpha': 0.2,
    'dashLength': 0
    }],
    'gridAboveGraphs': true,
    'startDuration': 1,
    'graphs': [{
        'balloonText': '[[category]]: <b>[[value]]</b>',
        'fillAlphas': 0.8,
        'lineAlpha': 0.2,
        'type': 'column',
        'valueField': 'temperature'
    }],
    'chartCursor': {
        'categoryBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false
    },
    'categoryField': 'zip',
    'categoryAxis': {
        'gridPosition': 'start',
        'gridAlpha': 0
    },
  'exportConfig':{
    'menuTop': 0,
    'menuItems': [{
      'icon': '/lib/3/images/export.png',
      'format': 'png'
      }]
  }
  });
}

})();
