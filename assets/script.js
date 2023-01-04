

$(function () {

  // Setting up the onclick event listener for the button.  The each function will cycle through each of 
  //the buttons of the appropriate parent div IDs.  
  //parentId saves the parent ID as the key for localStorage
  //value saves the text input for the text area the user inputs

    $('.btn').each(function (index) {
      $(this).on('click', function () {
        let parentId = $(this).parent().attr('id');
        let value = $(this).siblings('textarea').val();
        localStorage.setItem(parentId, value);
      })
    });

  //setting variable for hour as 24 hour time
  const $hour = parseInt(dayjs().format('HH'));
  
  //creating function to pull the #(hour) from the ID and then writing an if statement to add/remove
  //the appropriate classes
  
  $('[id^="hour-"]').each(function() {
    var hourID = parseInt($(this).attr('id').replace('hour-', ''));

    if ($hour === hourID) {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
   
    } else if ($hour < hourID) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
   
    } else if ($hour > hourID) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");

    }
    let savedValue = localStorage.getItem($(this).attr('id'));
    $(this).children('textarea').val(savedValue);
 
  });

  // Displays current date in the header as Day of week, Month date (i.e. Monday, January 2)
  const $day = dayjs().format('dddd, ' +'MMMM ' + 'D');
  $('#currentDay').append($day);

  // adding 1"st", 2"nd", 3"rd", 4"th", ect to the end of the date
  const $date = dayjs().format('D');
  if ($date === 1) {
    $('#currentDay').append('st');
  } else if ($date === 2) {
    $('#currentDay').append('nd');
  } else if ($date === 3) {
    $('#currentDay').append('rd');
  } else {
    $('#currentDay').append('th');
  }

  
  

});
