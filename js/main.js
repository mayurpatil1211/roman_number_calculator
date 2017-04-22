  function operation(RomanOne, RomanTwo, operator) {

      if (isRoman(RomanOne) == -1) {
          alert(RomanOne + ' is not a roman number');
          return -1
      }

      if (isRoman(RomanTwo) == -1) {
          alert(RomanTwo + ' is not a roman number');
          return -1
      }
      var romanValueOne = roman(RomanOne);
      var romanValueTwo = roman(RomanTwo);
      // var output = 0;
      switch (operator) {
          case '+':
              output = romanValueOne + romanValueTwo;
              break;
          case '-':
              if (romanValueOne == romanValueTwo || romanValueOne < romanValueTwo) {
                alert("Roman value one cannot be or less than roman value two");
                  return 'Error'
              }
              output = romanValueOne - romanValueTwo;
              break;
          case '*':
              output = romanValueOne * romanValueTwo;
              break;
          case '/':
              if (romanValueOne < romanValueTwo) {
                  alert("Roman value one cannot be or less than roman value two");
                  return 'Error'
              }
              output = romanValueOne / romanValueTwo;
              break;
      }

      var number = numberToRoman(output);
      document.getElementById('output').innerHTML = number;
      return number;
  }

  function isRoman(argument) {
      // body...
      var mapping = ["M", "D", "C", "L", "X", "V", "I"]
      var arr = argument.split("");
      for (var i = 0; i < arr.length; i++) {
          var isRom = mapping.indexOf(arr[i]);
          if (isRom == -1) {
              return -1;
          }
      }
      return 1;
  }


  function roman(roman) {

      var arr = roman.split("");
      return _.inject(arr, function(memo, letter, i) {
          var num = mapping[letter];
          var next = mapping[arr[i + 1]];
          if (next === undefined || next <= num) {
              return memo + num;
          } else {
              return memo - num;
          }
      }, 0);
  };

  function numberToRoman(number) {
      var pattern = {
              M: 1000,
              CM: 900,
              D: 500,
              CD: 400,
              C: 100,
              XC: 90,
              L: 50,
              XL: 40,
              X: 10,
              IX: 9,
              V: 5,
              IV: 4,
              I: 1
          },
          roman = '',
          i;
      console.log(i);
      for (i in pattern) {
          console.log(i);
          while (number >= pattern[i]) {
              roman += i;
              number -= pattern[i];
          }
      }
      return roman;
  }

    var mapping = {
      "M": 1000,
      "D": 500,
      "C": 100,
      "L": 50,
      "X": 10,
      "V": 5,
      "I": 1
  }
