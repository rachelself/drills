(function(){
  'use strict';

  $(document).ready(init);



  function init()
  {
    $('#go').click(go);
  }

  function go()
  {
    var x = $('#nums').val().trim().split(',').map(strip).map(squareOrCube).forEach(makeBoxes);
    console.log(x);
  }

  function strip(num)
  {
    return num.trim() * 1;
  }

  function squareOrCube(num)
  {
    if(isOdd(num) === 1)
    {
      return Math.pow(num, 3);
    }
    else if(isOdd(num) === 0)
    {
      return Math.pow(num, 2);
    }
  }

  function isOdd(num)
  {
    return num%2;
  }

  function makeBoxes(num)
  {
    var $div = $('<div>');

    if(isOdd(num) === 1)
    {
      $div.addClass('odd');
    }
    else if(isOdd(num) === 0)
    {
      $div.addClass('even');
    }

    $div.text(num);
    $('#container').append($div);
  }


})();
