(function(){
  'use strict';

  $(document).ready(init);

  function init()
  {
    $('button').click(go);
  }

  function go()
  {
    var x = getInput().split(',').map(strip);
    var start = x[0];
    var end = x[1];
    var array = makeArray(start, end);
    array.map(squares).filter(isEven).map(div).forEach(append);

  }

  function getInput(){
    return $('input').val();
  }

  function strip(num)
  {
    return num.trim() * 1;
  }

  function makeArray(start, end)
  {
    var array = [];
    for(var i = start; i <= end; i++)
    {
      array.push(i);
    }
    return array;
  }

  function squares(x)
  {
    return x * x;
  }

  function isEven(x)
  {
    return !isOdd(x);
  }

  function isOdd(x)
  {
    return x % 2;
  }

  function div(x)
  {
    return '<div>'+x+'</div>';
  }

  function append(div)
  {
    $('#storage').append(div);
  }



})();
