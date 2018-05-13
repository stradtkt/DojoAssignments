/**
 * Array: Push Front
Given array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods. 
 */

function pushFront(arr, val) {
  for(var i = arr.length - 1; i >= 0; i--) {
    arr[i+1] = arr[i];
  }
  arr[0] = val;
  return arr;
}
// console.log(pushFront([1,2,3,4,5,6],22));

/**
 * Array: Insert At
Given array, index, and additional value, insert the value into array at given index. 
Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
 */

 function insertAt(arr, idx, val) {
   for(var i = arr.length - 1; i >= idx; i--) {
     arr[i+1] = arr[i];
   }
   // idx represents the index of the array and the value is stored there
   arr[idx] = val;
   return arr;
 }
//  console.log(insertAt([1,2,3,4,5,6],2,55));

/**
 * Array: Pop Front
Given array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop(). 
 */

 function popFront(arr) {
   for(var i = 0; i < arr.length-1; i++) {
    arr[i] = arr[i+1];
   }
   arr.length--;
   return arr;
 }
//  console.log(popFront([1,2,3,4,5]));
// output [2,3,4,5]