function sigma(num) {
  var sum = 0;
  for(var i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

// console.log(sigma(7));

function factorial(num) {
  var mult = num;
  for(var i = num-1; i > 0; i--) {
    mult *= i;
  }
  return mult;
}
// console.log(factorial(4));


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
// console.log(fibonacci(25));

function arraySecondToLast(arr) {
  if(arr.length < 3) {
    return null;
  }
  for(var i = 0; arr.length; i++) {
    if(arr[i] == arr[arr.length-2]) {
      return arr[i];
    }
  }
  return arr;
}
// console.log(arraySecondToLast([1,2,3,4,5])); // output 4
// console.log(arraySecondToLast([1,2])); // output null

function arrayNthToLast(arr, num) {
  if(arr.length < num) {
    return null;
  }
  return arr[arr.length-num];
}
// console.log(arrayNthToLast([1,2,3,4,5,6], 3)); // output 4
// console.log(arrayNthToLast([1,2,3,4,5,6], 4)); // output 3
// console.log(arrayNthToLast([1,2,3,4,5,6], 5)); // output 2

function arraySecondLargest(arr) {
  if(arr.length < 3) {
    return null;
  }
  //sort the array then figure which one is the second largest [1] is the second largest 
  return arr.sort(function(a,b) {return b-a})[1];
}
// console.log(arraySecondLargest([1,22,32,43,53,22,21,34,556,69]));

function doubleTrouble(arr) {
  return arr.concat.apply([], arr.map(function(x) {return [x, x];}));
}
// console.log(doubleTrouble([4,"Ulysses",42,false]));

function Fib(num) {
  return num < 1 ? 0 : num <= 2 ? 1 : Fib(num - 1) + Fib(num - 2);
}
// console.log(Fib(25));