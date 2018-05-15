function multiplesOfThree() {
  for(var i = 3; i >= -300; i--) {
    if(i == -3 || i == -6) {
      continue;
    }
    console.log(i);
  }
}
multiplesOfThree();