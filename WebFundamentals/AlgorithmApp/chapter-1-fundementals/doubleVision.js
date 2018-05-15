function doubleVision(arr) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}
console.log(doubleVision([1,2,3]));
// output [2,4,6]