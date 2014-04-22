(function(){
  'use strict';

  $(document).ready(init);

  function init()
  {
    $('button').click(getNums);
  }

  function getNums()
  {
    var num1 = $('.num1').val() * 1;
    var num2 = $('.num2').val() * 1;
    math(num1, num2);
  }

  function math(num1, num2)
  {
    var sum = num1 + num2;
    $('#answer').text(sum);
  }


})();
