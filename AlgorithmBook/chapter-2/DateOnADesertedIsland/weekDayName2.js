function weekDayName2(weekdayNum) {
  var con = weekdayNum % 7;
  switch(con) {
    case 0:
      console.log('Saturday');
      break;
    case 1: 
      console.log('Sunday');
      break;
    case 2:
      console.log('Monday');
      break;
    case 3: 
      console.log('Tuesday');
      break;
    case 4:
      console.log('Wednesday');
      break;
    case 5:
      console.log('Thursday');
      break;
    case 6:
      console.log('Friday');
      break;
  }
}
weekDayName2(1);