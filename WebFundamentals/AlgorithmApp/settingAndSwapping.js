function setAndSwap() {
  var myName = "Kevin";
  var myNumber = 42;
  var temp = myNumber;
  myNumber = myName;
  myName = temp;
  console.log('My number is ' + myNumber + ", and my name is " + myName);
}
setAndSwap();