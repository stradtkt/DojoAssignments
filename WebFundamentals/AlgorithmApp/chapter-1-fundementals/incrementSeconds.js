function incrementSeconds(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(i % 2 !== 0) {
      arr[i]++;
    }
  }
  return arr;
}
console.log(incrementSeconds([1,2,3,4,5,6]));
// output [1,3,3,5,5,7]
