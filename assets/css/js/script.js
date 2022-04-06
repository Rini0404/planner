var today  = document.getElementById('currentDay');
var time = moment(); 

var timerInterval = setInterval(function() {
  today.innerHTML = moment().format("MMM Do YY");  
}, 1000);

console.log("ayo")
// .ready, starts the function 
  $(document).ready(function() {
  //gets the ID of saveButton and gives var SaveButton 
   // listen for save button click 
  //  more code for this item styling?
  var saveButton = $('#saveButton'); 
    $('#saveButton').on('click', function(event) {
      event.preventDefault();
      var saveB = $('.saveBtn')
      var time = $(this).sibling('.informaion').val();
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
        hour = time.hours();
        // loop over timeblocks
        $('.time-block').each(function () {
          // creat something to loop over the blocks
          var now = parseInt($(this).attr('id')); // convert my string to an interger...
          if (now > hour) { 
            $(this).addClass('future')
          } else if (now === hour) {
            $(this).addClass('presetn'); 
          } 
          else {
            $(this).addClass('past'); 
          }
        });
      }
      colorUpdater(); 

        $(timeBlock).each(function () {
          var get = $(this).attr('id'); 
          var planner = localStorage.getItem('id'); 
          (console.log(get))
            if(planner !== null) { 
              $(this).children('.planner').value(planner)
            }
        }); 
      // coppy and paste for each. 
      // $("#hour-nine .information").value(localStorage.getItem('hour-nine')); 
      // $("#hour-ten .information").value(localStorage.getItem('hour-ten')); 
      // $("#hour-eleven .information").value(localStorage.getItem('hour-eleve')); 
      // $("#hour-twelve .information").value(localStorage.getItem('hour-twelve')); 
      // $("#hour-one .information").value(localStorage.getItem('hour-one')); 
      // $("#hour-two .information").value(localStorage.getItem('hour-two')); 
      // $("#hour-three .information").value(localStorage.getItem('hour-three')); 
      // $("#hour-four .information").value(localStorage.getItem('hour-four')); 
      // $("#hour-five .information").value(localStorage.getItem('hour-five')); 


}); 
