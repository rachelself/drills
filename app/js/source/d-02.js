(function(){
  'use strict';

  $(document).ready(init);

  function init()
  {
    $('button').click(makeArray);
  }

  function makeArray()
  {
    var str = $('input').val();
    var strings = str.split(' ');
    makeBoxes(strings);
  }

  function makeBoxes(strings)
  {
    for(var i = 0; i < strings.length; i++)
    {
      var $div = $('<div>');
      var word = strings[i];
      $div.addClass('box');

      switch(isOdd(word))
      {
      case false:
        $div.addClass('even');
        $('.even').toLowerCase();
        break;
      case true:
        $div.addClass('odd');
        $('.odd').toUpperCase();
      }

      $div.text(word);
      $('#container').append($div);

    }

  }

  function isOdd(word)
  {
    //debugger;
    if(word.length%2 === 0)
    {
      return false;
    }else
    {
      return true;
    }
  }


})();
