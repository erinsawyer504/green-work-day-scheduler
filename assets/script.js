// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as **a key** to save the user input in local storage. 
  //HINT: What does `this` reference in the click listener function? 
  //How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 
  //How might the id be useful when saving the description in local storage?
    //ID is the parent
    //text area is the child
    //button is the sibling to text area (next(), prev())
    //to traverse from child to parent use parent()
    //get ID of an element $('textarea').parent().attr('id')
    //$('textarea').parent().next().attr('id')

  const $buttons = $(".btn");
 // console.log(buttons)
  for(let i=0; i < $buttons.length; i++) {
    const $btn = $buttons[i];
    $btn.click( function () {
     console.log(('this').parent().attr('id') + "clicked");
    })

  }

    
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

  });

  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. 
  // HINT: How can the id attribute of each time-block be used to do this?
  
  //!should i append here?
 

  // Displays current date in the header as Day of week, Month date (i.e. Monday, January 2)
  const $day = dayjs().startOf('month').add(1, 'day').set('year', 2018).format('dddd, ' +'MMMM ' + 'D');
  $('#currentDay').append($day);


});
