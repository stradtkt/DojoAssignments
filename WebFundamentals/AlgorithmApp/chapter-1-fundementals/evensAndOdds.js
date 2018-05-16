function evensAndOdds(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] && arr[i+1] && arr[i+2]) {
      if(arr[i] % 2 === 0 && arr[i+1] % 2 === 0 && arr[i+2] % 2 === 0) {
        console.log("Even more so!");
      }
      if(arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0 && arr[i+2] % 2 !== 0) {
        console.log("That's odd!");
      }
    }
  }
}
evensAndOdds([1,3,5,2,4,6]);
