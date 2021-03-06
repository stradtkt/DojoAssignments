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
// output [22,1,2,3,4,5,6]

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
 // output [1,2,55,3,4,5,6]

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
//output [1,2,4,5], 3

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
// output [2,1,4,3,6,5]

/**
 * Array: Remove Duplicates
 * Sara is looking to hire an awesome web developer 
 * and has received applications from various sources.
 * Her assistant alphabetized them but noticed some duplicates. 
 * Given a sorted array, remove duplicate values. Because array elements are already in order, 
 * all duplicate values will be grouped together. 
 * As with all these array challenges, do this without using any built-in array methods.
 */

function removeDuplicates(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i+1] == arr[i]) {
      for(var j = i; j < arr.length; j++) {
        arr[j] = arr[j+1];
      }
      arr.length--;
      i--;
    }
  }
  return arr;
}

// console.log(removeDuplicates([1,1,2,2,3,3,4,4,5,5,6,6]));
//output [1,2,3,4,5,6]


/**
 * Array: Min to Front
 * Given an array of comparable values, move the lowest element to array’s front,
 * shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. 
 * Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions. 
 */
function removeAt2(arr, idx) {
  for(var i = idx; i < arr.length; i++) {
    arr[i] = arr[i+1];
  }
  arr.length--;
  return arr;
}
function insertAt2(arr, idx, val) {
  for(var i = arr.length - 1; i >= idx; i--) {
    arr[i+1] = arr[i];
  }
  arr[idx] = val;
  return arr;
}

function minToFront(arr) {
  var min = arr[0];
  var m;
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
      m = i;
    }
  }
  arr = removeAt2(arr, m);
  return insertAt2(arr, 0, min);
}
// console.log(minToFront([4,5,1,2,3,4]));
// output [1,4,5,2,3,4]

/**
 * Array: Reverse
 * Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, 
 * with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – 
 * move values within the array that you are given. As always, do not use built-in array functions such as splice().
 */

function reverseArray(arr) {
  var left = 0;
  var right = arr.length-1;
  var temp;
  while(left < right) {
    temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}

// console.log(reverseArray([1,2,3,4,5,6]));
// output [6,5,4,3,2,1]

function reverseArray2(arr) {
  var temp;
  for(var i = 0; i < arr.length/2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
  }
  return arr;
}
// console.log(reverseArray2([6,5,4,3,2,1]));
// output [1,2,3,4,5,6]

function reverseArray3(arr) {
  var temp;
  for(var i = 0; i < arr.length-i; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
  }
  return arr;
}
// console.log(reverseArray3([10,9,8,7,6,5,4,3,2,1]));
// output [1,2,3,4,5,6,7,8,9,10]

/**
 * Array: Rotate
 * Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. 
 * Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. 
 * Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions. 
 * Second: allow negative shiftBy (shift L, not R). 
 * Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions. 
 * Fourth: minimize the touches of each element. 
 */

function rotateArray(arr, shiftBy) {
  var temp;
  for(var i = 1; i <= shiftBy; i++) {
    temp = arr[arr.length-1];
    for(var j = arr.length-1; j > 0; j--) {
      arr[j] = arr[j-1];
    }
    arr[0] = temp;
  }
  return arr;
}
// console.log(rotateArray([1,2,3,4],1));
// output [4,1,2,3]

/**
 * Array: Filter Range
 * Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. 
 * Given arr and values min and max, retain only the array values between min and max. 
 * Work in-place: return the array you are given, with values in original order. No built-in array functions. 
 */

function removeAt3(arr, idx) {
  for(var i = idx; i < arr.length; i++) {
    arr[i] = arr[i+1];
  }
  arr.length--;
  return arr;
}
function filterRange(arr, min, max) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < min || arr[i] > max) {
      removeAt3(arr, i);
      i--;
    }
  }
  return arr;
}
// console.log(filterRange([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,6], 3,4));
// output [3,4,3,4]


/**
 * Array: Concat
 * Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. 
 * Return a new array containing the first array’s elements, followed by the second array’s elements.
 * Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) 
 * should return new array ['a','b',1,2].
 */

function arrayConcat(arr1, arr2) {
  for(var i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1;
}
// console.log(arrayConcat([1,2,3],['a', 'b', 'c']));
//output [1,2,3,'a','b','c']

/**
 * Skyline Heights
 * Lovely Burbank has a breathtaking view of the Los Angeles skyline.
 * Let’s say you are given an array with heights of consecutive buildings,
 * starting closest to you and extending away. Array [-1,7,3] would represent three buildings: 
 * first is actually out of view below street level, behind it is second at 7 stories high, 
 * third is 3 stories high (hidden behind the 7-story). You are situated at street level.
 * Return array containing heights of buildings you can see, in order. 
 * Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, 
 * do not use built-in array functions such as unshift(). 
 */

function skylineHeights(arr) {
  var max = arr[0];
  var newArr = [];
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] > 0) {
      if(arr[i] > max) {
        newArr.push(arr[i]);
        max = arr[i];
      }
    }
  }
  return newArr;
}
// console.log(skylineHeights([-1,1,1,7,3]));
// output [1,7]
// console.log(skylineHeights([-1,2,4,4,7]));
//output [2,4,7]


/**
 * Implement removeNegatives() that accepts an array, removes negative values, 
 * and returns the same array (not a copy), preserving non-negatives’ order. 
 * As always, do not use built-in array functions. 
 * Second: don’t use nested loops. 
 */

function removeNegatives(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      for(var j = i; j < arr.length; j++) {
        arr[j] = arr[j+1];
      }
      arr.length--;
      i--;
    }
  }
  return arr;
}
// console.log(removeNegatives([1,2,3,-1,-1,-3,4,5,6,-4,-5,-6]));
// output [1,2,3,4,5,6]
function removeNegatives2(arr) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] >= 0) {
      newArr.push(arr[i]);
    }
  }
  arr = newArr;
  return arr;
}
// console.log(removeNegatives2([1,-1,3,-3,5,-5]));
// output [1,3,5]
/**
 * Array: Second-to-Last
 * Return the second-to-last element of an array. Given [42,true,4,"Kate",7], 
 * return "Kate". If array is too short, return null. 
 */

function secondToLast(arr) {
  if(arr.length < 2) {
    return null;
  }
  return arr[arr.length-2];
}
// console.log(secondToLast([42,true,4,"Kate",7]));
// output Kate

/**
 * Array: Nth-to-Last
 * Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3) , 
 * return 4 . If the array is too short, return null .
 */

 function nthToLast(arr, num) {
   if(arr.length < 4) {
     return null;
   }
   return arr[arr.length-num];
 }
//  console.log(nthToLast([3,4,5,6,7,8,9],3));
 // output  7


 /**
  * Array: Second-Largest
  * Return the second-largest element of an array. 
  * Given [42,1,4,Math.PI,7] , return 7 . If the array is too short, return null .
  */

  function secondLargest(arr) {
    var max = arr[0], sec = arr[0];
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] > max) {
        max = arr[i];
      }
    }
    for(var i = 0; i < arr.length; i++) {
      if((arr[i] < max) && arr[i] != max) {
        second = arr[i];
        break;
      }
    }
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] > second && arr[i] != max) {
        second = arr[i];
      }
    }
    return second;
  }
  // console.log(secondLargest([1,22,33,4,44,66,33,55,566,55]));
  // output 66

  /**
   * Array: Nth-Largest
   * Liam has "N" number of Green Belt stickers for excellent Python projects. 
   * Given arr and N , return the N th-largest element, where (N-1) elements 
   * are larger. Return null if needed.
   */