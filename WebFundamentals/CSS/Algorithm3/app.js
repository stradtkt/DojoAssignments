// function a(x, y) {
//   return 5;
// }
// console.log(a(5,5));

// output 5

// function a(x,y){
//   z = []
//   z.push(x);
//   z.push(y);
//   z.push(5);
//   console.log(z);
//   return z;
// }
// b = a(2,2)
// console.log(b);
// console.log(a(6,8));

//output [5,5,5], [5,5,5], [2,2,5], [2,2,5], [6,8,5], [6,8,5]

// function a(x){
//   z = [];
//   z.push(x);
//   z.pop();
//   z.push(x);
//   z.push(x);
//   return z;
// }
// y = a(2);
// y.push(5);
// console.log(y);

//output [2,2,5]

// function a(x){
//   if(x[0] < x[1]) {
//      return true;
//   }
//   else {
//      return false;
//   }
// }
// b = a([2,3,4,5])
// console.log(b);

//output true

// function a(x){
//   for(var i=0; i < x.length; i++){
//     if(x[i] > 0){
//       x[i] = "Coding";
//     }
//   }
//   return x;
// }
// console.log(a([1,2,3,4]));

// output ["Coding", "Coding", "Coding", "Coding"]

// function a(x){
//   for(var i=0; i<x.length; i++){
//     if(x[i] > 5){
//          x[i] = "Coding";
//     }
//     else if(x[i] < 0){
//          x[i] = "Dojo";
//     }
//   }
//   return x;
// }
// console.log(a([5,7,-1,4]));

//output [5, "Coding", "Dojo", 4]

// function a(x){
//   if(x[0] > x[1]) {
//    return x[1];
//   }
//   return 10;
// }
// b = a([5,10])
// console.log(b);

//output 10

// function sum(x){
//   sum = 0;
//   for(var i=0; i<x.length; i++){
//      sum = sum + x[i];
//      console.log(sum);
//   }
//   return sum;
// }
// sum([1,2,3,4,5]);

//output 1, 3, 6, 10, 15

// function avgArr(arr) {
//   var sum = 0;
//   for(var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   var avg = sum / arr.length;
//   console.log(avg);
//   return avg;
// }
// avgArr([1,23,24,2,5,6]); // output 10.1666666666...

// function oddIntegers() {
//   var arr = [];
//   for(var i = 0; i <= 255; i++) {
//     if(i % 2 != 0) {
//       arr.push(i);
//     }
//   }
//   console.log(arr);
//   return arr;
// }
// oddIntegers();

// function valuesSquared(arr) {
//   var squared = 0;
//   var newArr = [];
//   for(var i = 0; i < arr.length; i++) {
//     squared = arr[i] * arr[i];
//     newArr.push(squared);
//   }
//   console.log(newArr);
//   return newArr;
// }
// valuesSquared([1,2,3,4,5]);