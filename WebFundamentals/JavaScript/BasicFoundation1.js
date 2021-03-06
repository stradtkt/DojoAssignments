function getTo255() {
  for(var i = 1; i <= 255; i++) {
    console.log(i);
  }
}
// getTo255();

function getEven() {
  var sum = 0;
  for(var i = 0; i < 1000; i++) {
    if(i % 2 === 0) {
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}
// getEven();

function sumOfOdd() {
  var sum = 0;
  for(var i = 0; i < 5000; i++) {
    if(i % 2 != 0) {
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}
// sumOfOdd();

function iterateThroughAnArray(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum;
}
// iterateThroughAnArray([1,2,3,4,5]); //output 15


function findMax(arr) {
  for(var i = 0; i < arr.length; i++) {
    var max = Math.max(arr[i]);
  }
  console.log(max);
  return max;
}
// findMax([1,2,3,4,5,6]); // output 6


function findAverage(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var avg = sum / arr.length;
  console.log(avg);
  return avg;
}
// findAverage([1,2,3,4,5,6]); // output 3.5


function arrayOdd() {
  var newArr = [];
  for(var i = 0; i <= 50; i++) {
    if(i % 2 != 0) {
      newArr.push(i);
    } 
  }
  console.log(newArr);
  return newArr;
}
// arrayOdd();


function greaterThanY(arr) {
  var Y = 20;
  var count = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > Y) {
      count++;
    }
  }
console.log(count);
return count;
}
// greaterThanY([1,111,123,124]); // output 3


function squares(arr) {
  return arr.map(function(x) {
    return Math.pow(x, 2);
  });
}
// var output = squares([1,2,3,4,5,6]);
// console.log(output); //output [1,4,9,16,25,36]

function negatives(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      arr[i] = 0;
    }
  }
  console.log(arr);
  return arr;
}
// negatives([1,-1,2,-2,3,-3,4,-4]);


function maxMinAvg(arr) {
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var avg = sum / arr.length;
  console.log(max, min, avg);
  return max, min, avg;
}
// maxMinAvg([1,2,3,4,5,6,7,8]); //output 8, 1, 4.5


function swapValues(arr) {
  var arr2 = [];

  for(var i = arr.length - 1; i >= 0; i--) {
    arr2.push(arr[i]);
  }
  console.log(arr2);
  return arr2;
}
// swapValues([10,8,6,-2]);


/**
 * Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with 
 * the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
 */

function numberToString(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      arr[i] = 'Dojo';
    }
  }
  console.log(arr);
  return arr;
}
numberToString([-1,-2,1,1,-1,-2]);
