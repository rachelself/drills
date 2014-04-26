/* global AmCharts:true */
/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init()
  {
    $('#addZip').click(addZip);
    makeMap();
  }

  function addZip()
  {
    var city = $('#zip').val().trim();
    //console.log(city);
    var url = 'http://api.wunderground.com/api/bb0daa3d246877f0/conditions/q/'+city+'.json?callback=?';

    $.getJSON(url, function(conditions){


        cityConditions(conditions);

    });
  }

  function cityConditions(conditions)
  {
  //  debugger;
    //console.log(conditions);
    // zoomLevel: 5,
    // scale: 0.5,

    var cityInfo = {};
    var cityName = conditions.current_observation.display_location.full;
    var temp = conditions.current_observation.temperature_string;

    cityInfo.svgPath = targetSVG;
    cityInfo.zoomLevel = 5;
    cityInfo.scale = 0.5;
    cityInfo.title = cityName + ' ' + temp;
    cityInfo.latitude = conditions.current_observation.display_location.latitude * 1;
    cityInfo.longitude = conditions.current_observation.display_location.longitude * 1;

    console.log(cityInfo);
    map.dataProvider.images.push(cityInfo);
    map.validateData();
    //debugger;
  }


  var map;
  var targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z';
  function makeMap()
  {

      // svg path for target icon
    // var targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z';

    map = AmCharts.makeChart('map', {
      type: 'map',
        'theme': 'none',
         pathToImages: 'http://www.amcharts.com/lib/3/images/',

      imagesSettings: {
        rollOverColor: '#089282',
        rollOverScale: 3,
        selectedScale: 3,
        selectedColor: '#089282',
    color:'#13564e'
      },

    zoomControl:{buttonFillColor:'#15A892'},

    areasSettings:{unlistedAreasColor:'#15A892'},

      dataProvider: {
        map: 'worldLow',
        images: [{
          // svgPath: targetSVG,
          // zoomLevel: 5,
          // scale: 0.5,
          // title: 'Vienna',
          // latitude: 48.2092,
          // longitude: 16.3728
        }]
      }
    });

    }



})();
