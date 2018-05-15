function valuesGreaterThanSecond(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > arr[1]) {
      console.log(arr[i]);
    }
  }
}
valuesGreaterThanSecond([1,3,5,7,9,13]);
// output 5,7,9,13

