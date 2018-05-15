function printAndCount() {
  var count = 0;
  for(var i = 512; i < 4096; i+=5) {
    count++;
    console.log(i);
  }
  return count;
}
console.log(printAndCount());