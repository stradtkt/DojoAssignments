function fitFirstValue(arr) {
  if(arr[0] > arr.length) {
    console.log("Too big!");
  } else if(arr[0] < arr.length) {
    console.log("Too small!");
  } else {
    console.log("Just right!");
  }
}
fitFirstValue([4,2,3,1]);
// output Just right!
fitFirstValue([1,2,3,4]);
// output Too small!
fitFirstValue([10,1,2,3,4]);
// output Too big!