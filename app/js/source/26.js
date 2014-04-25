(function(){
  'use strict';

  $(document).ready(init);

  function init()
  {
    $('#get').click(get);
  }

  function get()
  {
    var zip = $('#zip').val().trim();
    console.log(zip);
  }


})();
