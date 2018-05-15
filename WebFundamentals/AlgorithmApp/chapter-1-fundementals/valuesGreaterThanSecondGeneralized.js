function valuesGreaterThanSecondGeneralized(arr) {
  var newArr = [];
  var count = 0;
  if(arr.length < 2) {
    return "There are not enough items in the array";
  }
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > arr[1]) {
      newArr.push(arr[i]);
      count++;
    }
  }
  console.log(count);
  return newArr;
}
console.log(valuesGreaterThanSecondGeneralized([1,3,5,7,9,13]));
// output [5,7,9,13], 4