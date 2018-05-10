function valuesGreaterThanY(arr, y) {
  var count = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > y) {
      count++;
    }
  }
  console.log(count);
  return count;
}
// valuesGreaterThanY([1,100,24,26,86], 25);


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
// maxMinAvg([1,23,23,4,56,78]);

function numberToString(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      arr[i] = 'Dojo';
    }
  }
  console.log(arr);
  return arr;
}
// numberToString([-1,-23,1,2,3,4,-45]);

function removeVals(arr, start, end) {
  for(var i = 1; i < end; i++) {
    for(var j = start; j < arr.length; j++) {
      arr[j] = arr[j+1];
    }
    arr.length--;
  }
  return arr;
}
// console.log(removeVals([20,30,40,50,60,70], 2, 4));