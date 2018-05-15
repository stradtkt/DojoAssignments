function lengthValue(num1, num2) {
  var arr = [];
  if(num1 === num2) {
    console.log("Jinx");
  }
  for(var i = 0; i < num1; i++) {
    arr[i] = num2;
  }
  return arr;
}
console.log(lengthValue(22,22));
// output Jinx, [22*22]
console.log(lengthValue(22,2));
// output [2*22]
console.log(lengthValue(2,22));
// output [22,22]