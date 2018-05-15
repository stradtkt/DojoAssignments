function printLowReturnHigh(array) {
  var low = array[0];
  var high = array[0];
  for(var i = 1; i < array.length; i++) {
    if(array[i] < low) {
      low = array[i];
    }
    if(array[i] > high) {
      high = array[i];
    }
  }
  console.log("The low is: " + low);
  console.log('The high is: '+ high); 
  return "The high is "+ high;
}
printLowReturnHigh([1,2,3,4,5,6,7,8,9]);

//output The low is: 1, The high is 9