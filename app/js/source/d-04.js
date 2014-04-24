(function(){
  'use strict';

  $(document).ready(init);

  function init()
  {
    $('button').click(getNums);
  }

  function getNums()
  {
    var nums = $('input').val();
    var nums2 = nums.split('-');

    var stringB = nums2[0];
    var stringE = nums2[1];

    splitNums(stringB, stringE);

  }

  function splitNums(stringB, stringE)
  {
    display(getBases(stringB), getExponents(stringE));
  }

  function getBases(stringB)
  {
    var bases = stringB.split(',');
    return bases;
  }

  function getExponents(stringE)
  {
    var exponents = stringE.split(',');
    return exponents;

  }

  // function display(bases, exponents)
  // {
  //   var arrayexp = [];
  //   arrayexp = exponents.map(makeSuper);
  //
  //   //var $x = $('#container');
  //   arrayexp.map(makeDiv);
  //
  //   //.map(makeDiv).map(math).map(div).forEach(bigDiv);
  //
  // }

  function display(bases, exponents)
  {
    for(var i = 0; i < bases.length; i++)
    {
      var exp = exponents[i];
      var bas = bases[i];

      var $superscriptDiv = $(makeDiv(bas, exp));
      $superscriptDiv.addClass('superscript');

      var $bigDiv = $('<div></div>');
      $bigDiv.addClass('bigdiv');
      $bigDiv.append($superscriptDiv);
      $('#container').append($bigDiv);

      var $mathDiv = $(pDiv(bas, exp));
      $mathDiv.addClass('math');
      $bigDiv.append($mathDiv);


      // var $superscript = $(makeSuper()).append(exp[i]);
      // $(makeDiv()).append($superscript);



      // var bas = bases[i];
      // makeDiv(bas, superscript);
      //
      // math(exp, bas);
      // console.log(product);


    }

  }

  function makeDiv(bas, exp)
  {
    return '<div>' + bas + makeSuper(exp) + '</div>';

  }

  function makeSuper(exp)
  {
    var superscript = '<sup>' + exp + '</sup>';
    return superscript;

  }

  function pDiv(bas, exp)
  {
    return '<div>' + math(bas,exp) + '</div>';
  }

  function math(bas, exp)
  {
    return Math.pow(bas, exp);
  }


  //
  // function math(exponents, bases)
  // {
  //   var product = Math.pow(bases, exponents);
  //   return product;
  //
  // }
  //
  // function div(product)
  // {
  //   var $div = $('<div></div>');
  //   $div.addClass('product');
  //   $div.append(product);
  //   return $div;
  // }
  //
  // function bigDiv()
  // {
  //   $('div.superscript').append('#container');
  //   $('div.product').append('#container');
  //
  // }



  // function splitArrays(nums2)
  // {
  //   var popped = nums2.pop();
  //
  //   var exponent = popped.split(',');
  //   console.log(exponent);
  //   debugger;
  //   var bases = nums2.split(',');
  //
  //
  //   console.log(bases);
  //
  // }

  // function getPowers(popped)
  // {
  //   var powers;
  //
  //   powers = tmp.split(',');
  //   console.log(powers);
  // }
  //
  // function getBases(nums2)
  // {
  //   var bases;
  //   bases = nums2.split(',');
  //   console.log(bases);
  // }


})();

// function getNums()
// {
//   var nums = $('input').val();
//   var numsSplit;
//
//   for(var i = 0; i < nums.length; i++)
//   {
//     numsSplit[i] = nums[i].split(',');
//   }
//   debugger;
//
// }
