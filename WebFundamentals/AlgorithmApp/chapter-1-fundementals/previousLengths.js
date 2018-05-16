function previousLengths(arr) {
  for(var i = arr.length; i > 0; i--) {
    var str = arr[i-1];
    arr[i] = str.length;
  }
  return arr;
}
console.log(previousLengths(["Hello", "my", "name", "is", "Kevin"]));