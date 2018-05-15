function countdown(num) {
  var arr = [];
  var count = 0;
  for(var i = num; i >= 0; i--) {
    arr.push(i);
    count++;
  }
  console.log(count);
  return arr;
}
console.log(countdown(20));