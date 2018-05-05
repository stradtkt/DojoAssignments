///////////////////////////////////////////////////////////////////////////////////////////////////////
// setting and swapping
    //set myNumber to 42
    //set myName to your name
      //now swap myNumber into myName & vice versa
      function swap() {
        var myNumber = 42;
        var myName = "Kevin";
        console.log(myNumber+", "+myName);
        var temp = myNumber;
        myNumber = myName;
        myName = temp;
      
        console.log('My number is now ' + myNumber);
        console.log('My name is now ' + myName);
      }
      // swap();
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      // print -52 to 1066
          //print integers from -52 to 1066 using a for loop
      
          function forLoop() {
            var start = -52;
            for(var i = start; i < 1067; i++) {
              console.log(i);
            }
          }
          // forLoop();
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      //Don’t Worry, Be Happy
      //Create beCheerful(). Within it, console.log
      //string "good morning!" Call it 98 times
      
      function beCheerful() {
        for(var i =0; i < 98; i++) {
          console.log("good morning!");
        }
      }
      // beCheerful();
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /* Multiples of Three – but Not All
      Using FOR, print multiples of 3 from -300 to 0.
      Skip -3 and -6.
      */
      
      function skipNumbers() {
        var max = 3, min = -300;
        for(var i = max; i >= min; i = i - 3) {
          if(i == -3 || i == -6) {
            continue;
          }
          console.log(i);
        }
      }
      // skipNumbers();
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Printing Integers with While
      Print integers from 2000 to 5280, using a WHILE
      */
      
      function whileLoop() {
        var start = 1999;
        while(start < 5280) {
          start++;
          console.log(start);
        }
      }
      // whileLoop();
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      
      /*
      You Say It’s Your Birthday
      If 2 given numbers represent your birth month
      and day in either order, log "How did you
      know?", else log "Just another day...."
      */
      
      function birthday() {
          var today = new Date();
          var nowYear = today.getFullYear();
          var nowMonth = today.getMonth();
          var nowDay = today.getDate();
          
          var birth = prompt("When were you born?", "YYYY-MM-DD");
          var birth = new  Date(parseInt(birth.substring(0,4)),parseInt(birth.substring(5,7))-1,parseInt(birth.substring(8,10)));
          
          var birthYear = birth.getFullYear();
          var birthMonth = birth.getMonth();
          var birthDay = birth.getDate();
          
          var compBirth = birthMonth.toString() + birthDay.toString();
          var compToday = nowMonth.toString() + nowDay.toString();
          
          
          if( compBirth == compToday) {
            alert('Happy Birthday!');  
          } else if ( compBirth > compToday){
            alert('Your birthday is comming!');  
          } else {
            alert('Happy b-lated day!');  
          }
            
        }
        // birthday();
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Leap Year
      Write a function that determines whether a given
      year is a leap year. If a year is divisible by four,
      it is a leap year, unless it is divisible by 100.
      However, if it is divisible by 400, then it is.
      */
      
      
      function leapYear(year) {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
      }
      leapYear();
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /**
       * Print and Count
      Print all integer multiples of 5, from 512 to 4096.
      Afterward, also log how many there were.
       */
      
      var myFunctionCalls = 0
      function multiplesOfFive() {
        var  start = 512, end = 4096;
        for(var i = start;  i <= end; i = i + 5) {
          myFunctionCalls++;
          console.log(i);
        }
        alert(myFunctionCalls);
      }
      // multiplesOfFive();
      
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
       /*
       Multiples of Six
      Print multiples of 6 up to 60,000, using a WHILE.
       */
      
       function whileLoopSix() {
         var start = 0;
        while(start < 60000) {
          start+=6;
          console.log(start);
        }
       }
      //  whileLoopSix();
      
      
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
       /*
       Counting, the Dojo Way
      Print integers 1 to 100. If divisible by 5, print
      "Coding" instead. If by 10, also print " Dojo".
       */
      
       function countingDojoWay() {
         for(var i = 1; i <= 100; i++) {
           if(i % 5 ==0) {
             console.log('Coding');
           }
           if(i % 10 ==0) {
             console.log(' Dojo');
           }
           console.log(i);
         } 
       }
      //  countingDojoWay();
      
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      What Do You Know?
      Your function will be given an input parameter
      incoming. Please console.log this value.
      */
      
      
      function inputParameter(age) {
        age = prompt('What is your age?');
      
        document.write('<h1>You are '+ age+ ' years old!</h1>');
        console.log('You are '+ age+ ' years old!');
      }
      // inputParameter();
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Whoa, That Sucker’s Huge…
      Add odd integers from -300,000 to 300,000, and
      console.log the final sum. Is there a shortcut?
      */
      
      function suckerHuge() {
        var sum = 0, start = -300000, end = 300000;
        for(var i = start; i < end; i++) {
          if(i % 2 == 0) {
            continue;
          }
          sum += i;
          console.log(sum);
        }
      }
      // suckerHuge();
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Countdown by Fours
      Log positive numbers starting at 2016, counting
      down by fours (exclude 0), without a FOR loop.
      */
      function whileCountDown() {
        var counter = 2020;
        while(counter > 4) {
          if(counter % 4 == 0) {
            counter -= 4;
            console.log(counter);
          }
        }
      }
      // whileCountDown();
      
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Flexible Countdown
      Based on earlier “Countdown by Fours”, given
      lowNum, highNum, mult, print multiples of mult
      from highNum down to lowNum, using a FOR.
      For (2,9,3), print 9 6 3 (on successive lines)
      */
      
      function flexibleCountDown(lowNum, highNum, mult) {
        var num = highNum;
        while(num > lowNum) {
          console.log(num);
          // the num is subtracted by the mult
          num -= mult;
        }
      }
      // flexibleCountDown(2, 9, 3);
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      The Final Countdown
      This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is
      essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4),
      print the multiples of param1, starting at param2 and extending to param3. One exception: if a
      multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print
      6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).
      */
      function theFinalCountDown(mult, lowNum, highNum, skip) {
        var num = lowNum;
        while(num < highNum) {
          if(num % mult == 0 && num != skip) {
            console.log(num);
          }
          num++;
        }
      }
      // theFinalCountDown(3,5,17,9);
      // theFinalCountDown(2,10,22,16);
      // theFinalCountDown(/*mult, lowNum, highNum, skip*/);
        
        ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Countdown
      Create a function that accepts a number as an input. Return a new array that counts down by one, from
      the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
      */
      
      function countdownInput(number) {
        var array = [];
        var count = 0;
        for(var i = number; i >= 0; i--) {
          count++;
          console.log('Counting: ' + count)
          array.push(i);
        }
        console.log(array.length);
        return array;
      }
      // countdownInput(30); // leaves it with 31 items in the array
      // countdownInput(20); //leaves it with 21 items in the array
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      
      /*
      Print and Return
      Your function will receive an array with two numbers. Print the first value, and return the second.
      */
      
      function printAndReturnTwoNumbers(num1, num2) {
        console.log(num1);
        return num2;
      }
      // printAndReturnTwoNumbers(22, 2);
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      First Plus Length
      Given an array, return the sum of the first value in the array, plus the array’s length. What happens if
      the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
      */
      
      function firstPlusLength(array) {
        return array[0] + array.length;
      }
      
      // console.log(firstPlusLength([20,22,23,24,25])); //returns 25
      // console.log(firstPlusLength(["what?", 1,2,3,4])); //returns what?5
      // console.log(firstPlusLength([false, 1,2,3,4,5])); //returns 5
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Values Greater than Second
      For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
      */
      
      function valuesGreaterThanTheSecond(array) {
        var count = 0;
        for(var i = 0; i < array.length; i++) {
          if(array[i] > array[1]) {
            console.log(array[i]);
            count++;
          }
          console.log("Count is: " + count);
        }
      }
      // valuesGreaterThanTheSecond([1,3,5,7,9,13]);
      // valuesGreaterThanTheSecond([1,4,5,6,7,8,9,10,12]);//count is 7 because they are all being compared to the 4 in the array
      //count ends up being 4 
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Values Greater than Second, Generalized
      Write a function that accepts any array, and returns a new array with the array values that are greater
      than its 2nd value. Print how many values this is. What will you do if the array is only one element long?
      */
      
      function valuesGreaterThanTheSecondGeneralized(array) {
        var count = 0;
        var array2 = [];
        if(array.length < 2) {
          console.log('There is not enough in the array for this function to work on it');
        }
        for(var i = 0; i < array.length; i++) {
          if(array[i] > array[1]) {
            array2.push(array[i]);
            count++;
          }
        }
        console.log("Count is: " + count);
        console.log(array2);
        return array2;
      }
      valuesGreaterThanTheSecondGeneralized([1,3,5,7,9,13]); //returns [5,7,9,13]
      // valuesGreaterThanTheSecondGeneralized([1]);
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      This Length, That Value
      Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
      */
      
      function lengthValue(num1, num2) {
        var array = [];
        if(num1 == num2) {
          console.log("Jinx!");
        }
        for(var i = 0; i < num1; i++) {
          array[i] = num2;
        }
        return array;
      }
      // console.log(lengthValue(10,10));
      // console.log(lengthValue(10, 0));
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Fit the First Value
      Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!";
      if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
      */
      
      
      function fitTheFirstValue(array) {
        if(array[0] > array.length) {
          console.log("Too big!");
        } else if(array[0] < array.length) {
          console.log("Too small!");
        } else {
          console.log("Just right!");
        }
      }
      // fitTheFirstValue([10,1,2,3,4,5,6,7,8,9]);
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      
      /*
      Fahrenheit to Celsius
      Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees)
      that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed
      in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
      */
      
      
      function fahrenheitToCelsius(fDegrees) {
        return ((fDegrees - 32) * 5) / 9;
      }
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      
      /*
      Celsius to Fahrenheit
      Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns
      the equivalent temperature expressed in Fahrenheit degrees.
      (optional) Do Fahrenheit and Celsius values equate at a certain number? Scientific calculation can be
      complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward
      (descending), checking whether it is equal to the corresponding Fahrenheit value.
      */
      
      function celsiusToFahrenheit(cDegrees) {
        return (cDegrees * 9/5) + 32;
      }
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Biggie Size
      Given an array, write a function that changes all
      positive numbers in the array to “big”. Example:
      makeItBig([-1,3,5,-5]) returns that same
      array, changed to [-1,"big","big",-5].
      */
      
      function biggieSize(array) {
        for(var i = 0; i < array.length; i++) {
          if(array[i] > 0) {
            array[i] = "big";
          }
        }
        return array;
      } 
      console.log(biggieSize([0,1,2,1,1,1,1,-1])); //[0, "big" * 6 , -1]
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Print Low, Return High
      Create a function that takes array of numbers.
      The function should print the lowest value in the
      array, and return the highest value in the array.
      */
      function printLowReturnHigh(array) {
        var low = array[0];
        var high = array[0];
        for(var i = 1; i < array.length; i++) {
          if(array[i] < low) {
            low = array[i];
          }
          if(array[i] > high) {
            high = array[i];
          }
        }
        console.log("The low is: " + low); //1
        console.log('The high is: '+ high); //9
        return "The high is "+ high;
      }
      printLowReturnHigh([1,2,3,4,5,6,7,8,9]);
      
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Print One, Return Another
      Build a function that takes array of numbers. The
      function should print second-to-last value in the
      array, and return first odd value in the array.
      */
      
      function printOneReturnAnother(array) {
        console.log(array[array.length - 2]); //-2 prints the second to last item -1 prints the last item
        for(var i = 0; i < array.length; i++) {
          if(array[i] % 2 != 0) {
            console.log(array[i]); // printing the first item in the array that is an odd value
            return array[i];
          }
        }
      }
      // printOneReturnAnother([1,2,3,4,5]);
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Double Vision
      Given array, create a function to return a new
      array where each value in the original has been
      doubled. Calling double([1,2,3]) should
      return [2,4,6] without changing original.
      */
      
      function doubleVision(array) {
        var newArray = [];
        for(var i = 0; i < array.length; i++) {
          newArray.push(array[i]*2);
        }
        console.log(array);
        console.log(newArray);
        return newArray;
      }
      doubleVision([1,2,3]);
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Count Positives
      Given array of numbers, create function to
      replace last value with number of positive values.
      Example, countPositives([-1,1,1,1])
      changes array to [-1,1,1,3] and returns it.
      */
      
      function countPositives(array) {
        var count = 0;
        for(var i = 0; i < array.length; i++) {
          if(array[i] > 0) {
            count++;
          }
        }
        array[array.length-1] = count; // changes the last number to the count variable
        console.log(array);
        return array;
      }
      // countPositives([-1,1,1,1]);
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Evens and Odds
      Create a function that accepts an array. Every
      time that array has three odd values in a row,
      print "That’s odd!" Every time the array has
      three evens in a row, print "Even more so!"
      */
      function evensAndOdds(array) {
        for(i=0; i < array.length; i++) {
          if(array[i] && array[i+1] && array[i+2]) {
              if(array[i]% 2 == 0 && array[i+1] % 2 == 0 &&  array[i+2 ]% 2 == 0) { 
              console.log("Even more so!");
              }
              if(array[i] % 2 != 0 && array[i+1 ]% 2 != 0 &&  array[i+2 ]% 2 != 0) {
              console.log("That's odd!");
              }
          }
        }
      }
      
      // evensAndOdds([1,3,3]);
      // evensAndOdds([2,4,6,7]);
      // evensAndOdds([1,3,5,6,8,6,7,9,5]);
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Increment the Seconds
      Given arr, add 1 to odd elements ([1], [3],
      etc.), console.log all values and return arr.
      */
      
      function incrementSeconds(arr) {
        for(var i = 0; i < arr.length; i++) {
          if(i % 2 != 0) {
            arr[i]++; // finding the odd numbers and incrementing them
          }
          console.log(arr[i]);
        }
        return arr;
      }
      // incrementSeconds([1,2,3,4,5,6,7]);
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Previous Lengths
      You are passed an array containing strings.
      Working within that same array, replace each
      string with a number – the length of the string at
      previous array index – and return the array.
      */
      
      function previousLengths(array) {
        for(var i = array.length; i >= 1; i--) {
          var str = array[i - 1];
          array[i] = str.length;
        }
        console.log(array);
        return array;
      }
      // previousLengths(["my", "name", "is", "kevin", "what", "is", "yours"]);
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Add Seven to Most
      Build function that accepts array. Return a new
      array with all values except first, adding 7 to
      each. Do not alter the original array.
      */
      
      function addSevenToMost(arr) {
        var newArr = [];
        for(var i = 1; i < arr.length; i++) {
          newArr.push(arr[i] + 7);
        }
        console.log(newArr);
        return newArr;
      }
      // addSevenToMost([1,1,2,2,3,3,4,5,6]);
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      
      /*
      Reverse Array
      Given array, write a function to reverse values,
      in-place. Example: reverse([3,1,6,4,2])
      returns same array, containing [2,4,6,1,3].
      */
      
      
      function reverseArray(array) {
        var newArray = new Array;
        for(var i = array.length-1; i >= 0; i--) {
            newArray.push(array[i]);
        }
        console.log(newArray);
        return newArray;
      }
      
      // reverseArray([3,1,6,4,2]);
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Outlook: Negative
      Given an array, create and return a new one
      containing all the values of the provided array,
      made negative (not simply multiplied by -1).
      Given [1,-3,5], return [-1,-3,-5].
      */
      function outlookNegative(array) {
        var newArray = [];
        for(var i = 0; i < array.length; i++) {
          if(array[i] > 0) {
            newArray.push(array[i] - array[i]*2);
          } else {
            newArray.push(array[i]);
          }
        }
        console.log(newArray);
        return newArray;
      }
      // outlookNegative([1,-3,5]);
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Always Hungry
      Create a function that accepts an array, and
      prints "yummy" each time one of the values is
      equal to "food". If no array elements are
      "food", then print "I'm hungry" once.
      */
      
      function alwaysHungry(array) {
        var isFood = false;
        for(var i = 0; i < array.length; i++) {
          if(array[i] == "food") {
            console.log("yummy");
            isFood = true;
          }
        }
        if(!isFood) {
          console.log("I am hungry");
        }
      }
      // alwaysHungry([1,2,3,"food", "none"]);
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Swap Toward the Center
      Given array, swap first and last, third and third-tolast,
      etc. Input[true,42,"Ada",2,"pizza"]
      becomes ["pizza",42,"Ada",2,true].
      Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
      */
      function swapTowardCenter(arr) {
        var left = 0;
        var right = arr.length - 1; //seeing how right right one is the last one 
        while(left < right) {
          var temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
      
          left+=2;
          right-=2;
        }
        console.log(arr);
        return arr;
      }
      
      
      // function swapTowardCenter2(arr) {
      //   for(var i = 0; i < arr.length / 2; i+=2) {
      //     var temp = arr[i];
      //     arr[i] = arr[arr.length - 1 -i];
      //     arr[arr.length - 1 - i] = temp;
      //   }
      // } 
      // swapTowardCenter([true, 42, "Ada", 2, "pizza"]);
      // swapTowardCenter([1,2,3,4,5,6]);
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      /*
      Scale the Array
      Given array arr and number num, multiply each
      arr value by num, and return the changed arr.
      */
      
      function scaleTheArray(arr, num) {
        for(var i = 0; i < arr.length; i++) {
          arr[i] = arr[i] * num;
        }
        console.log(arr);
        return arr;
      }
      // scaleTheArray([12,22,32,42,52],22);
      
      
      