var today  = document.getElementById('currentDay');


var timerInterval = setInterval(function() {
  today.innerHTML = moment().format("MMM Do YY");  
}, 1000);

console.log("ayo")

//updates each day
// var update = function (){ 
//   document.getElementById('dateCurrent').innerHTML = moment().format("MMM Do YYYY, h:mm:ss a");
// }; 
// setInterval(update, 1000); 

// .ready, starts the function 
  $(document).ready(function() {
  //gets the ID of saveButton and gives var SaveButton 
   // listen for save button click 
  //  more code for this item styling?
  var saveButton = $('#saveButton'); 
    $('#saveButton').on('click', function(event) {
      event.preventDefault();
      var value = $(this).sibling('.informaion').val();
      var value = $(this).parent().attr('id');
      // above, grabs the variables values and when called it uses them. 
      // set item is another way to say youre saving an item. 
       //saves the actual time, and its value es: the time is 8pm, saves "PM"
      localStorage.setItem(time, value)
      $(saveButton);
      alert('You have saved your edit!')
    });
  console.log(document)
  // udpadate current hours and change colors
    
      function colorUpdater() {
        var currentHour = moment().hours;

        // loop over timeblocks
        $('.time-block').each(function () {
          // creat something to loop over the blocks


        });
      }
      $("#hour-nine .information").value(localStorage.getItem('hour-nine')); 


})

// colorUpdater(); 

// function colorUpdater(){
//   // the var for the conditional statement. 
//   var now = new Date().getHours(); 

//   if (now > 9) { // if now is less than 9
//     $("9AM").addClass("past"); // give 9 AM A class of past, which turns it grey
//   } else if (now >= 9 && now < 10){
//   $("9AM").addClass('present'); 
//   }else {
//     $("9AM").addClass('future');
//   }
//    // if now is greater than} 
// }; 

