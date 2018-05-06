/**
 Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). 
 Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5). 
 */

 function sigma(num) {
   var sum = 0;
   for(var i = 0; i <= num; i++) {
     sum += i;
   }
   return sum;
 }
//  console.log(sigma(5)); // output = 15

/**
 Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, 
 returns the product (multiplication) of all positive integers from 1 up to number (inclusive). 
 For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5). 
 */

function factorial(num) {
  var mult = num;
  for(var i = num - 1; i > 0; i--) {
    mult *= i;
  }
  return mult;
}
// console.log(factorial(5));


/*
Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly 
divisible by 3 or 5 but not both. Display the final sum in the console. 
*/

function threeFives() {
  var sum = 0;
  for(var i = 100; i < 400000; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
      continue;
    } else if(i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}

/**
 Create betterThreesFives(start,end) that allows you to enter arbitrary start and end values for your range. Think of threesFives()as betterThreesFives(100,4000000). 
 */

function betterThreeFives(start, end) {
  var sum = 0;
  for(var i = start; i <= end; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
      continue;
    } else if(i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}
// betterThreeFives(1000, 40000000);

/**
 * Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). 
 * Accept a number of American cents, compute and print how to represent that amount with smallest number of coins. Common 
 */

function generateCoinChange(cents) {
  var coins = [
    ['dollars', 100],
    ['halfdollars', 50],
    ['quarters', 25],
    ['dimes', 10],
    ['nickles', 5],
    ['pennies', 1]
  ];

  var change = {};
  for(var i = 0; i < coins.length; i++) {
    change[coins[i][0]] = Math.floor(cents/coins[i][1]);
    cents = cents % coins[i][1];
  }
  for(coin in change) {
    console.log(coin + ": "+ change[coin]);
  }
}
// generateCoinChange(499);

/**
Create a function messyMath(num) that will return the following sum: add all integers from 0 up to the given num, except for the following special cases of our count value:
If current count (not num) is evenly divisible by 3, don’t add to sum; skip to the next count; 
Otherwise, if current count is evenly divisible by 7, include it twice in sum instead of once; 
Regardless of the above, if current count is exactly 1/3 of num, return -1 immediately.
 
For example, if given num is 4, return 7. If given num is 8, return 34. If given num is 15, return -1. 
 */

function messyMath(num) {
  var sum = 0;
  for(var i = 0; i <= num; i++) {
    if(i == num/3) {
      return -1;
    } else if(i % 7 == 0) {
      sum += i*2;
    } else if(i % 3 == 0) {
      continue;
    } else {
      sum += i;
    }
  }
  return sum;
}
// console.log(messyMath(4));
// console.log(messyMath(8));
// console.log(messyMath(15));

/**
 *  Twelve-Bar Blues
Write a function that console.logs 
the number 1, then "chick", then "boom", 
then "chick", then 2, then "chick", "boom", "chick" 
– continuing the same cycle for each number up to (including) 12. 
 */

 function twelveBarBlues() {
   for(var i = 1; i <= 12; i++) {
     console.log(i);
     console.log('chick');
     console.log('boom');
     console.log('chick');
   }
 }
// twelveBarBlues();

/**
 * Create a function to generate Fibonacci numbers. 
 * In this famous mathematical sequence, 
 * each number is the sum of the previous two, 
 * starting with values 0 and 1. 
 * Your function should accept one argument, 
 * an index into the sequence 
 * (where 0 corresponds to the initial value, 4 corresponds to the 
 * value four later, etc). Examples: fibonacci(0) = 0 (given), 
 * fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), 
 * fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc. 
 */

function fibonacci(num) {
  var sum = 1;
  var i = 0;
  var j = 1;
  while(num > 1) {
    sum = i + j;
    i = j;
    j = sum;
    num--;
  }
  return sum;
}
// console.log(fibonacci(7));
// console.log(fibonacci(10));


/**
 * Sum to One Digit
Kaitlin sees beauty in numbers, but also believes that less is more. 
Implement sumToOne(num) 
that sums a given integer’s digits repeatedly until the 
sum is only one digit. Return that one-digit result. Example: sumToOne(928)
 returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1. 
 */

function sumToOneDigit(num) {
  if(num < 10) {
    return num;
  }
  var str = num.toString();
  var sum = 0;
  for(var i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return sumToOneDigit(sum);
}
// console.log(sumToOneDigit(1345));


/**
 * IS PRIME
 * Return whether a given integer is prime. Prime numbers are only evenly divisible 
 * by themselves and 1. Many highly optimized solutions exist,
 *  but for now just create one that is easy to understand and debug.
 */

 function isPrime(num) {
  for(var i = num - 1; i > 1; i--) {
    if(num % i == 0) {
      return false;
    }
  }
  return true;
 }
 function testIsPrime(numTimes) {
   var arr = [];
   var primeVals = [];
   for(var x = 2; x <= numTimes; x++) {
     arr.push(x);
   }
   for(var j = 0; j < arr.length; j++) {
     if(isPrime(arr[j])) {
       primeVals.push(arr[j]);
     }
   }
   console.log(primeVals);
   return primeVals;
 }
//  testIsPrime(100);


/**
 * Ever since you arrived at the Dojo, 
 * you wanted one of those cool Coding Dojo sweatshirts
 *  – maybe even more than one. Let’s say they cost $20 
 * (including tax), but friendly Josh gives a 9% discount if you buy two, 
 * a nice 19% discount if you buy three, or a sweet 35% discount if you 
 * buy four or more. He only accepts cash and says he doesn’t have coins, 
 * so you should round up to the nearest dollar. 
 * Build function sweatshirtPricing(num) that, given a number of sweatshirts,
 *  returns the cost.
 */

 function rockingTheDojoSweatshirt(num) {
   var unitCost = 20;
   var discount = [
     [2, 0.09],
     [3, 0.19],
     [4, 0.35]
   ];

   for(var i = 0; i < discount.length; i++) {
     if(num <= discount[i][0]) {
       return num * unitCost * (1 - discount[i][1]);
     }
   }
   return num * unitCost
 }

 /**
  * Return to your previous clockHandAngles solution. Allow fractional values for input seconds, 
  * but change your implementation to print only integer values for angles (in degrees) of the various hands. 
  */



  /**
   * Create the extractDigit(num,digitNum) function that given a number and a digit number, returns the numeral value of that digit. 0 represents the ones digit,
   *  1 represents the tens digit, etc. Given (1824,2), return 8. Given (1824,0), return 4. Given (1824,7), return 0.
   * Second: handle negative digitNum values, where -1 represents tenths digit (0.x), -2 represents hundredths digit (0.0x), etc. Given (123.45,-1), return 4. 
   * Third: handle negative num values as well, doing what you think is appropriate. 
   */

function extractOMatic(num, digitNum) {
  console.log(Math.floor(Math.abs(num)/Math.pow(10, digitNum)) % 10);
}
// extractOMatic(-123.45,-1);

  
/**
 * If you already know who Ada Lovelace is, that’s great! In a History of Science, she is significant. 
 * Given number of any size, return the most significant digit. If you already know what strings are, that’s great! 
 * However, don’t use them here . Hint: use WHILE to bring the most significant digit into range where you can use the friendly modulus operator (%). 
 * The most significant digit is the leftmost non-zero digit of a number. 
 * Given 12345, return 1. Given 67.89, return 6. Given 0.00987, return 9. 
Second: handle negative num values as well, doing what you think is appropriate. 
 */

function mostSignificantDigit(num) {
  num = Math.abs(num);

  if(num < 1) {
    while(num < 10) {
      num *= 10;
      if(num > 1 && num < 10) {
        return Math.trunc(num);
      }
    }
  } else if(num > 10) {
    while(num > 10) {
      num /= 10;
      if(num > 1 && num < 10) {
        return Math.trunc(num);
      }
    }
  }
}

// console.log(mostSignificantDigit(0.00987)); // output 9
// console.log(mostSignificantDigit(67.89)); // output 6
// console.log(mostSignificantDigit(12345)); // output 1


/**
 * Claire is Where?
 * On New Year’s Eve, have fun but don’t forget your way home! For this challenge create four 
 * functions (reset, moveBy, xLocation and yLocation) to track the travels of Claire, a wanderer. 
 * Calling reset() moves Claire home to the origin (0,0). The moveBy(xOffset,yOffset) function moves her by those amounts, 
 * in those directions. Finally, xLocation() and yLocation()return how far Claire is from home, in X and Y directions respectively. 
 * After the calls of reset(), moveBy(1,-2), and moveBy(3,1), subsequently calling xLocation() and yLocation() should return 4 and -1. 
 * Second: create distFromHome(). Assuming she moves diagonally, return her distance from home. 
 */

 function  clairIsWhere(num) {
  var x = 0;
  var y = 0;

   function reset() {
     x = 0;
     y = 0;
   }
   function moveBy(xOffset, yOffset) {
     x += xOffset;
     y += yOffset
   }
   function xLocation() {
     return x;
   }
   function yLocation() {
     return y;
   }
   function distFromHome() {
     return Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
   }
   reset();
   moveBy(1,2);
   moveBy(3,1);
   console.log("Claire's Coordinates: ("+ xLocation() +", "+ yLocation() +")");
   console.log("Distance from home: "+distFromHome().toFixed([2]));
 }
//  clairIsWhere();


