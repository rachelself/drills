(function(){
  'use strict';

  $(document).ready(init);

  function init()
  {
    $('button').click(get);
  }

  function get()
  {
    $('.input').val().trim().split(',').map(strip).map(makeBoxes);

  }

  function strip(string)
  {
    return string.trim();
  }

  function makeBoxes(word)
  {
    var $div = $('<div>');

    if(isOdd(word) === true)
    {
      $div.text(word.toUpperCase());
      $div.addClass('odd');
    }
    else
    {
      $div.text(word.toLowerCase());
      $div.addClass('even');
    }
    $('#container').append($div);
  }


  // {
  //   for(var i = 0; i < strings.length; i++)
  //   {
  //     var $div = $('<div>');
  //     var word = strings[i];
  //     $div.addClass('box');
  //
  //     switch(isOdd(word))
  //     {
  //     case false:
  //       $div.addClass('even');
  //       $('.even').toLowerCase();
  //       break;
  //     case true:
  //       $div.addClass('odd');
  //       $('.odd').toUpperCase();
  //     }
  //
  //     $div.text(word);
  //     $('#container').append($div);
  //
  //   }
  //
  // }

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
