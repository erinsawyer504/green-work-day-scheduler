// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  //setting variable for hour as 24 hour time
  const $hour = parseInt(dayjs().format('HH'));
  
  $('[id^="hour-"]').each(function() {
    var hourID = $(this).attr('id').replace('hour-', '');
    var hourIDNum = parseInt(hourID);

    if ($hour === hourIDNum) {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
   
    } else if ($hour < hourIDNum) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
   
    } else if ($hour > hourIDNum) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");

    }

  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
 
  // Displays current date in the header as Day of week, Month date (i.e. Monday, January 2)
  const $day = dayjs().startOf('month').add(1, 'day').set('year', 2018).format('dddd, ' +'MMMM ' + 'D');
  $('#currentDay').append($day);


});

