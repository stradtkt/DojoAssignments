function monthToDays2(monthName) {
  var sum = 0;
  var months = [
    ["January", 31],
    ["February", 28],
    ["March", 31],
    ["April", 30],
    ["May", 31],
    ["June", 30],
    ["July", 31],
    ["August", 31],
    ["September", 30],
    ["October", 31],
    ["November", 30],
    ["December", 31]
  ];
  for(var i = 0; i < 12; i++) {
    if(months[i][0] == monthName) {
      return sum;
    }
    sum += months[i][1];
  }
}

function fullDate(dayNum) {
  var dayOfWeek = weekDayName2(dayNum);
  var monthName = dayToMonth(dayNum);
  var dayOfMonth = dayNum - monthToDays2(monthName);
  var year = "2018";
  console.log(dayOfWeek + ", " + monthName + " " + dayOfMonth + ", " + year);
}

fullDate(237);