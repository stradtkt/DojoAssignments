function makeNegativeValuesZero(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      arr[i] = 0;
    }
  }
  console.log(arr);
  return arr;
}
// makeNegativeValuesZero([1,-1,2,-2,3,-3,4,-4]);
//output [1,0,2,0,3,0,4,0]

function leaveZeroAtEnd(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] == arr[0]) {
      arr.shift();
    }
  }
  arr.push(0);
  console.log(arr);
  return arr;
}
// leaveZeroAtEnd([1,2,3]); 
// output [2,3,0]


function returnReversed(arr) {
  var temp;
  for(var i = 0; i < arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  console.log(arr);
  return arr;
}
// returnReversed([1,2,3]); 
// output [3,2,1]

function duplicateArray(arr) {
  for(var i = 0; i < arr.length; i+=2) {
    for(var j = arr.length-1; j > i; j--) {
      arr[j+1] = arr[j];
    }
    arr[i+1] = arr[i];
  }
  console.log(arr);
  return arr;
}
// duplicateArray([4, 'Ulysses', 42, false]); 
// output [4,4,'Ulysses', 'Ulysses', 42,42,false,false]
