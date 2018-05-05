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
console.log(factorial(5));


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
generateCoinChange(499);