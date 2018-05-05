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