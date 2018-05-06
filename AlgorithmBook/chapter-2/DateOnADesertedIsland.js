/**
 * After a particularly fabulous New Year’s Eve party to end 2016, Eduardo wakes to find himself stranded on a deserted island. He misses his home in Burbank, but at least now he can spend plenty of time outdoors – and you can’t beat the commute! To pass the time until he is rescued, he counts sunrises.
1)      Help Eduardo track what day of the week it is. Create a weekdayName(weekdayNum) function that, given a number between 1 and 7, will console.log a string containing the day of the week for that number (given 1, log "Sunday"). Use a SWITCH statement. 
2)      Expand weekdayName() to create weekdayName2(dayNum) accepting numbers up to 365. Return weekday as before, given number of days total. "Sunday" still corresponds to 1. 
3)      Create a new function someDays() that calls weekDayName2() seventeen times, with randomly generated integers as high as 365. Log each result string. If it is a weekday, add the phrase "Work hard!", and if it is a weekend day, add "Enjoy your day off!" 
4)      Build function monthName(monthNum) that, given a number from 1 to 12, returns a string containing month for that number ("May" corresponds to 5). Use an array, without loops. 
5)      Now expand monthName() to create monthToDays(monthNum), returning the number of days in that month, in the year 2017. Hint: use a SWITCH statement for the days in each month. 
6)      Despite using his ember expertise to create a glowing SOS visible from space, the days go by and sadly Eduardo is still not rescued. Is it spring yet? It might as well be. Build on monthName() to create dayToMonth(dayNum). If given a day number since the year began, return the current month (assume it is not a Leap Year). Given 75, return "March". 
7)      Eduardo builds a Dojo bootcamp on the island. Initially his students only find Ninja Gold in caves, but eventually even his tree sloths can write code quickly! Dojo classes meet Monday thru Friday, so let’s reincorporate weekday to our calculations. Construct fullDate(dayNum) to accept number of days so far in 2017, and return a full date string. He hardly remembers that fateful New Year’s Eve party, but he knows it was a Saturday. Given 142, return "Monday, May 22, 2017". 
8)      Times flies when you’re at a Dojo – months in fact. Build fullDate2(dayNum) that will be given a 4-digit integer: the days that have passed since December 31, 2016. This number can stretch into future years! You can assume that any year number divisible by four is a leap year and has a 29-day February. Given 8475, return "Thursday, March 15, 2040". 
9)      Eduardo hacks the Google Maps API and adds this long-forgotten island back onto the map. Soon he is rescued! News of his Hemingway-like stoicism make him famous for centuries. Build fullDate3(dayNum) to handle days up to 140,000! Note: years 2100, 2200, and 2300 are not leap years (although 2400 is). Given 139947, return "Tuesday, February 29, 2400". 
Having completed this epic saga, you are ready for additional concepts and chapters! Journey safely….
 */

 //1
// function weekDayName(weekdayNum) {
//   switch(weekdayNum) {
//     case 1:
//       console.log("Sunday");
//       break;
//     case 2:
//       console.log('Monday');
//       break;
//     case 3:
//       console.log('Tuesday');
//       break;
//     case 4:
//       console.log('Wednesday');
//       break;
//     case 5:
//       console.log('Thursday');
//       break;
//     case 6:
//       console.log('Friday');
//       break;
//     case 7:
//       console.log('Saturday');
//       break;
//     default:
//       console.log('Invalid weekday number');
//   }
// }
// weekDayName(7);



// //2
// function weekDayName2(weekdayNum) {
//   var con = weekdayNum % 7;
//   switch(con) {
//     case 0:
//       console.log('Saturday');
//       break;
//     case 1: 
//       console.log('Sunday');
//       break;
//     case 2:
//       console.log('Monday');
//       break;
//     case 3: 
//       console.log('Tuesday');
//       break;
//     case 4:
//       console.log('Wednesday');
//       break;
//     case 5:
//       console.log('Thursday');
//       break;
//     case 6:
//       console.log('Friday');
//       break;
//   }
// }
// weekDayName2(1);



//3
function weekDayName2(weekdayNum) {
  var con = weekdayNum % 7;

  switch(con) {
    case 1: 
      console.log('Sunday');
      return 1;
    case 2:
      console.log('Monday');
      return 2;
    case 3:
      console.log('Tuesday');
      return 3;
    case 4:
      console.log('Wednesday');
      return 4;
    case 5:
      console.log('Thursday');
      return 5;
    case 6: 
      console.log('Friday');
      return 6;
    case 7:
      console.log('Saturday');
      return 7;
  }
}

function someDays() {
  var num;
  for(var i = 1; i <= 100; i++) {
    num = weekDayName2(Math.floor(Math.random() * 365 + 1));
    if(num == 1 || num == 0) {
      console.log('Enjoy your day off!');
    } else {
      console.log('Work Hard!');
    }
  }
}
someDays();


//4

//5

//6

//7

//8

//9