$(document).ready(function() {
  // Create two variables with the names of the months and days in an array
  var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
  var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  function DateAndTime() {
    // Create a cDate() object that is the current local time
    var cDate = new Date();
    // Add a leading zero to seconds value
    $("#seconds").html(( cDate.getSeconds() < 10 ? "0" : "" ) + cDate.getSeconds());
    // Add a leading zero to the minutes value
    $("#minutes").html(( cDate.getMinutes() < 10 ? "0" : "" ) + cDate.getMinutes());
    // Add a leading zero to the hours value
    $("#hours").html(( cDate.getHours() < 10 ? "0" : "" ) + cDate.getHours());
    if (cDate.getDate() !== parseInt($('#Day').html())) {
      $('#Day').html(cDate.getDate());
      $('#DayOfWeek').html(dayNames[cDate.getDay()]);
      $('#MonthName').html(monthNames[cDate.getMonth()]);
      $('#MonthNumber').html(cDate.getMonth()+1);
      $('#Year').html(cDate.getFullYear());
      }
  }; // end DateAndTime()

  DateAndTime();

  setInterval( function() {
    DateAndTime();
    }, 1000);	
  }); // end .ready()
