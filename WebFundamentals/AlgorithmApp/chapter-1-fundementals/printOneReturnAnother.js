function printOneReturnAnother(arr) {
  console.log(arr[arr.length-2]);
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0) {
      console.log(arr[i]);
      return arr[i];
    }
  }
}
printOneReturnAnother([1,2,3,4,5,6,7,8,9]);
//output 8,1