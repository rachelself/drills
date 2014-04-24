(function(){
  'use strict';

  $(document).ready(init);

  function init()
  {
    $('#colorbox').click(toggle);

  }

  function toggle()
  {

    $(this).toggleClass('red');
    $(this).toggleClass('green');

  }


})();
