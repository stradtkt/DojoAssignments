function multiply(x,y){
  console.log(x);
  console.log(y);
}
// multiply(2,3);
// console.log(multiply(2,3));

// output 2, 3, 2, 3, undefined


function multiply(x,y){
  return x*y;
}
// multiply(2,3);
// console.log(multiply(3,4));

//output 12


var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}

// output 3,7


x=15;
console.log(x);
function awesome(){
    x=10;
    console.log(x);
}
// console.log(x);
// awesome();
// console.log(x);

// output 15, 15, 10, 10


for(var i=0; i<15; i+=2){
  console.log(i);
}

// output 0, 2, 4, 6, 8, 10, 12, 14

for(var i=0; i<3; i++) {
  for(var j=0; j<2; j++) {     
      console.log(i*j);
  }
}
/// output 0, 0, 0, 1, 0, 2


function looping(x,y){
  for(var i=0; i<x; i++){
     for(var j=0; j<x; j++){      
         console.log(i*j);
     } 
  }
}
// z = looping(3,3);
// console.log(z);

// output 0,0,0,0,1,2,0,2,4

function looping(x,y){
  for(var i=0; i<x; i++){
     for(var j=0; j<y; j++){        
        console.log(i*j);
     } 
  }
  return x*y;
}
// z = looping(3,5);
// console.log(z);

// output 0,0,0,0,0,0,1,2,3,4,0,2,4,6,8,15


function printUpTo(x){
  for(var i = 1; i < x; i++) {
    if(x > 0) {
      console.log(i);
    } else if(x < 0) {
      console.log('Negative Number');
      return false;
    }
  }
}
// printUpTo(10); // should print all the integers from 1 to 100000
// var y = printUpTo(-10); // should return false
// console.log(y); // should print false


function printSum(x){
  sum = 0;
  for(var i = 0; i < x; i++) {
    sum += i;
  }
  return sum
}
// y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
// console.log(y) // should print 32385

function printSumArray(x){
  sum = 0;
  for(var i=0; i<x.length; i++) {
    sum += x[i];
  }
  return sum;
}
// console.log( printSumArray([1,2,3]) ); // should log 6