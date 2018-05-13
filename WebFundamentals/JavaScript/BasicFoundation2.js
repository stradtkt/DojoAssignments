function biggieSize(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      arr[i] = "big";
    }
  }
  return arr;
}
// console.log(biggieSize([-1,-2,5,6,7,-1,-1]));


function printLowReturnHigh(arr) {
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);
  console.log(min);
  return max;
}
// console.log(printLowReturnHigh([1,2,3,4,5,6]));


function printOneReturnAnother(arr) {
  console.log(arr[arr.length-2]);
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 != 0) {
      return arr[i];
    }
  }
}
// console.log(printOneReturnAnother([1,2,3,4,5,6]));

function doubleVision(arr) {
  var newArr = [];
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum = arr[i] + arr[i];
    newArr.push(sum);
  }
  return newArr;
}
// console.log(doubleVision([1,2,3]));

function doubleVision2(arr) {
  var newArr = arr.map(function(x) {return x+x;});
  return newArr;
}
// console.log(doubleVision2([1,2,3,4]));



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
// console.log(countPositives([-1,-1,1,1,1]));

function evenAndOdds(arr) {
  for(var i = 2; i < arr.length; i++) {
    if(arr[i] % 2 != 0 && arr[i-1] % 2 != 0) {
      if(arr[i-2] % 2 != 0) {
        return 'That\'s odd!';
      } 
    } 
    if(arr[i] % 2 == 0 && arr[i-1] % 2 == 0) {
      if(arr[i-2] % 2 == 0) {
        return 'Even more so!';
      }
    }
  }
  return "No three in a row";
}
// console.log(evenAndOdds([1,3,5,4,2,4,6]));

function incrementSeconds(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(i % 2 != 0) {
      arr[i]++;
    }
  }
  return arr;
}
// console.log(incrementSeconds([1,2,3,4,5,6]));

function previousLengths(arr) {
  for(var i = arr.length-1; i > 0; i--) {
    var str = arr[i];
    arr[i] = str.length;
  }
  return arr;
}
// console.log(previousLengths(["hell0", "there", "my", "name", "is", "Kevin"]));
// Does not compute the first word into a number 
//If you set it to for(var i = 0; i < arr.length; i++) you will get an error on the length property
// So it cannot be >= 0 it can only be > 0 it would need to be >= 0 to read the first word


function addSevenToMost(arr) {
  var newArr = [];
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum = arr[i] + 7;
    newArr.push(sum);
  }
  return newArr;
}
// console.log(addSevenToMost([1,2,3,4,5,6,7]));

function addSevenToMost2(arr) {
  var newArr = arr.map(function(x) {return x+7});
  return newArr;
}
// console.log(addSevenToMost2([1,2,3,4,5,6,7]));



function reverseArray(arr) {
  for(var i = 0; i < arr.length/2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
  }
  return arr;
}
// console.log(reverseArray([1,2,3,4,5,6]));

function reverseArray2(arr) {
  return arr.reverse();
}
// console.log(reverseArray2([1,2,3,4]));


function outlookNegative(arr) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      // when pushing onto the new arr it times 2 by its value and then subtracts that from the original item
      newArr.push(arr[i] - arr[i] * 2);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// console.log(outlookNegative([1,-3,5]));


function alwaysHungry(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] == 'food') {
      return "I'm hungry";
    }
  }
  return arr;
}
// console.log(alwaysHungry(['food', 1,2,3,4,5]));

function swapTowardTheCenter(arr) {
  var left = 0;
  //this is the far right value of the array
  var right = arr.length-1;
  while(left < right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left+=2;
    right-=2;
  }
  return arr;
}
// console.log(swapTowardTheCenter([true,42,"Ada",2,"pizza"]));

function scaleTheArray(arr, num) {
  for(var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * num;
  }
  return arr;
}
// console.log(scaleTheArray([1,2,3,4,5,6],2));