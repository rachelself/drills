(function(){
  'use strict';

  $(document).ready(init);

  var timer;
  var clock;

  function init()
  {
    $('#container').on('click', '#start', startTimer);
    $('#container').on('click', '#stop', stopTimer);
  }

  function startTimer()
  {
    //clearInterval(timer);
    clock = $('.currentTime').text() * 1;
    timer = setInterval(updateClock, 1000);
    //debugger;

  }

  function updateClock()
  {
    clock++;
    $('.currentTime').text(clock);
  }

  function stopTimer()
  {
    clearInterval(timer);
    //debugger;
  }





  // function init()
  // {
  //   $('#start').click(startTimer);
  //   $('#stop').click(pauseTimer);
  // }
  //
  // function startTimer()
  // {
  //   timer = setInterval(updateClock, 1000);
  // }
  //
  // function updateClock()
  // {
  //   timer++;
  //   $('.currentTime').text(timer);
  //
  // }
  //
  // function pauseTimer()
  // {
  //   //var count = timer;
  //   clearInterval(timer);
  //   debugger;
  //   $('.currentTime').text(timer);
  //   //debugger;
  // }


})();


// function resetInterval(bool)
// {
//   if(bool)
//   {
//     timer = setInterval(function(){
//       timer++;
//       $('.currentTime').text(timer);
//     },1000);
//   }
//   else
//   {
//       clearInterval(timer);
//   }
// }
//
// $('#start').click(function()
// {
//   resetInterval(true);
// });
// $('#stop').click(function(){
//   resetInterval(false);
// });
