function countPositives(arr) {
  var count = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      count++;
      arr.pop();
      arr.push(count);
    }
  }
  return arr;
}
console.log(countPositives([-1,1,1,1]));
// output [-1,1,1,3]
