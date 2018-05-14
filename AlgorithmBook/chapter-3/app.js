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

/**
 *  Array: Remove At
 * Given array and an index into array, remove and return the array value at that 
 * index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
 */

function removeAt(arr, idx) {
  var temp = arr[idx];
  for(var i = idx; i < arr.length; i++) {
    arr[i] = arr[i+1];
  }
  arr.length--;
  console.log(arr);
  return temp;
}
// console.log(removeAt([1,2,3,4,5], 2));

/**
 * Array: Swap Pairs
 * Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, 
 * change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.
 */

function swapPairs(arr) {
  var limit;
  arr.length % 2 != 0 ? limit = arr.length-1 : limit = arr.length;
  for(var i = 0; i < limit; i+=2) {
    var temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;
  }
  return arr;
}
// console.log(swapPairs([1,2,3,4,5,6]));