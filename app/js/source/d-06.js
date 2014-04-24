(function(){
  'use strict';

  $(document).ready(init);

  function init()
  {
    $('button').click(go);
  }

  function go()
  {
    var y = getInput().split(',').map(strip);
    var start = y[0];
    var end = y[1];
    var array = makeArray(start, end);

    getLastthree(array).reverse().map(makeDivs).forEach(append);

  }

  function getInput()
  {
    return $('input').val();
  }

  function strip(words)
  {
    return words.trim() * 1;
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

  function getLastthree(array)
  {
    var lastThree = [];
    var popped;
    for(var i = 0; i < 3 ; i++)
    {
      popped = array.pop();
      lastThree.push(popped);
    }
    return lastThree;
  }

  function makeDivs(x)
  {
    return '<div class="box">'+x+'</div>';
  }

  function append(x)
  {
    $('#storage').append(x);
  }

})();
