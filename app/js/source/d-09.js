(function(){
  'use strict';

  $(document).ready(init);

  // var r = 0;
  // var g = 0;
  // var b = 0;
  // var a = 0;
  // var string = [];

  function init()
  {
    $('#colorbox').click(newColor);
  }

  function newColor()
  {
    //resetColors();
    $('#colorbox').css('background-color', getColors());
    //debugger;
  }

  function getColors()
  {

    $('#colorbox').css('background-color', 'rgba('+Math.floor(Math.random() * 298)+','+Math.floor(Math.random() * 298)+','+Math.floor(Math.random() * 298));

  }

  // function resetColors()
  // {
  //
  //   console.log
  //   debugger;
  // }

  // function getColors()
  // {
  //   r = getRandom();
  //   g = getRandom();
  //   b = getRandom();
  //   a = Math.floor(Math.random() * 2);
  //   string.push(r,g,b,a);
  //   var z = string.toString();
  //   var newcolor = 'rgba(' + z + ')';
  //   console.log(newcolor);
  //   //debugger;
  //   return newcolor;
  //
  // }

  // function resetColors()
  // {
  //   $('#colorbox').css('background-color', 'rgba(0,0,0,0)');
  //   console.log
  //   debugger;
  // }

  // function getRandom()
  // {
  //   return Math.floor(Math.random() * 298);
  // }


})();
