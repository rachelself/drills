(function(){
  'use strict';

  $(document).ready(init);

  function init()
  {
    $('button').click(getInput);
  }

  function getInput()
  {
    var exp;
    var str = $('input').val();
    var strings = str.split(' ');
    exp = strings.map(fourth);
    var result = exp.map(div);
    display(result);
  }

  function fourth(strings)
  {
    return Math.pow(strings,4);
  }

  function div(exp)
  {
    return '<div>'+exp+'</div>';
  }

  function display(result)
  {
    $('#container').append(result);
  }


})();
