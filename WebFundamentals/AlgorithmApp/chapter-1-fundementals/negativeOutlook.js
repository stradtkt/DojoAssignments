function negativeOutlook(arr) {
var newArr = [];
  for(var i = 0; i < arr.length; i++) {

      newArr.push(arr[i] - (arr[i] * 2));
    }
  return newArr;
}
console.log(negativeOutlook([-1,-2,3,4,5]));