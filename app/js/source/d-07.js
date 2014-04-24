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
    var stop = x[1];
    var array = makeArray(start, stop);

    mateSum(array).map(div).forEach(append);

  }

  function getInput()
  {
    return $('input').val();
  }

  function strip(nums)
  {
    return nums.trim() * 1;
  }

  function makeArray(start, stop)
  {
    var nums = [];
    for(var i = start; i <= stop; i++)
    {
      nums.push(i);
    }
    return nums;
  }

  function mateSum(array)
  {
    console.log(array);
    var n = array.length;
    var m = n / 2;
    var z = [];

    for(var i = 0; i <= m-1; i++)
    {
      z[i] = array[i] + array[n-(i+1)];
      console.log(z);
    }

    if(n%2 === 1)
    {
      z.push(array[(n-1)/2]);
      return z;

    }
  }

  function div(x)
  {
    return '<div class="box">' + x + '</div>';
  }

  function append(box)
  {
    $('#container').append(box);
  }

  // function mateSum(array)
  // {
  //   var tmp = [];
  //   var shifted;
  //   var popped;
  //
  //   for(var i = 0; i < array.length; i++)
  //   {
  //
  //     shifted = array.shift();
  //     popped = array.pop();
  //     tmp.push(shifted, popped);
  //
  //     if(array.length === 1)
  //     {
  //       tmp.push(array[0]);
  //     }
  //
  //     console.log(tmp);
  //     debugger;
  //     return tmp;
  //   }
  //
  //   // if(isOdd(tmp) === true)
  //   // {
  //   //   var z = (tmp.length - 1) / 2;
  //   //   var spliced = tmp.splice(z);
  //   //   console.log(spliced);
  //   // }
  //
  // }

  // function isOdd(tmp)
  // {
  //   return tmp.length%2;
  // }

  // function getLength(array)
  // {
  //   var z = array.length - 1;
  //   console.log(z);
  // }


// if(isOdd(array) === true)
// {
//   var x = array.length-1;
//
//   for(var i = 0; i < x; i++)
//   {
//     var popped = array.shift() + array.pop();
//
//     var tmp = [];
//     tmp.push(popped);
//   }
// }
// else
// {
//   x = array.length;
//
//   for(var j = 0; j < x; j++)
//   {
//     popped = array.shift() + array.pop();
//
//     tmp = [];
//     tmp.push(popped);
//   }
// }



})();
