function addSevenToMost(arr) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + 7);
  }
  return newArr;
}
console.log(addSevenToMost([1,2,3,4,5,6,7]));