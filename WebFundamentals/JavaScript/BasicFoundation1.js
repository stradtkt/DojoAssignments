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



