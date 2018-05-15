function valuesGreaterThanSecondGeneralized(arr) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > arr[1]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(valuesGreaterThanSecondGeneralized([1,3,5,7,9,13]));
// output [5,7,9,13]