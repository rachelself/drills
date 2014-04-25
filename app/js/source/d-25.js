/* global AmCharts:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init()
  {
    $('#add').click(add);
    makeChart();

  }

  function add()
  {
    var symbol = $('#symbol').val().trim().toUpperCase();
    //console.log(symbol);
    var shares = $('#shares').val().trim();
    console.log(shares);

    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    // var price;
    $.getJSON(url, function(quote){
        updateChart(quote, shares);
    });

  }

  function updateChart(quote, shares)
  {
    var portfolioItem = {};

    var price = quote.LastPrice;
    var worth = price * shares;
    portfolioItem.symbol = quote.Symbol;

    portfolioItem.worth = worth;
    console.log(portfolioItem);

    chart.dataProvider.push(portfolioItem);
    chart.validateData();


  }

  // function calculateHoldings(price, shares)
  // {
  //   return price * shares;
  // }

  var chart;
  function makeChart()
  {
    chart = AmCharts.makeChart('graph', {
     'type': 'pie',
     'theme': 'light',
     'titles': [{
         'text': 'Your Portfolio',
         'size': 16
     }],
     'dataProvider': [],
     'valueField': 'worth',
     'titleField': 'symbol',
     'startEffect': 'elastic',
     'startDuration': 2,
     'labelRadius': 15,
     'innerRadius': '50%',
     'depth3D': 10,
     'balloonText': '[[title]]<br><span style="font-size:14px"><b>[[value]]</b> ([[percents]]%)</span>',
     'angle': 15,
     'exportConfig':{
       menuItems: [{
       icon: '/lib/3/images/export.png',
       format: 'png'
       }]
     }
   }
 );}

})();
