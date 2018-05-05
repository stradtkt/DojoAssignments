/**
 Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5). 
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
 Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5). 
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
Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console. 
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
  
}