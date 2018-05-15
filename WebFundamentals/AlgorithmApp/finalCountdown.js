function finalCountdown(mult, low, high, skip) {
  while(low < high) {
    if(low % mult === 0 && low !== skip) {
      console.log(low)
    }
   low++;
  }
}
finalCountdown(2,2,10,4);