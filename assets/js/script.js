var today  = $('#currentDay')


  var timeDisplay = moment().format("dddd, MMMM do YYYY, h:mm:ss a"); 
  $("#currentDay").text(timeDisplay); 



  var update = function () {
    document.getElementById('currentDay').innerHTML = moment().format("dddd, MMMM do YYYY, h:mm:ss a");
  }; 
setInterval(update, 1000);


console.log("ayo")
// .ready, starts the function 
    $(document).ready(function() {
    
  //gets the ID of saveButton and gives var SaveButton 
   // listen for save button click 
  //  more code for this item styling?
  var saveBtn = $('.saveBtn')
    saveBtn.on('click', function(event) {
      event.preventDefault();
      var value = $(this).siblings('.information').val();
      var time = $(this).parent().attr('id');
      console.log(value)
      // above, grabs the variables values and when called it uses them. 
      // set item is another way to say youre saving an item. 
       //saves the actual time, and its value es: the time is 8pm, saves "PM"
      localStorage.setItem(time, value)
      $(saveButton);
      alert('You have saved your edit!')
    });
  console.log(document)
  // udpadate current hours and change colors
    

      // selected class .time-block
        $(".time-block").each(function () {
          var id = $(this).attr('id'); 
          var time = localStorage.getItem('id'); 
          console.log(id)
            if(time !== null) { 
              $(this).children('.time').value(time)
            }
        });
        function colorUpdater() {
        var hour = moment().hours();
        console.log(hour)
        // loop over timeblocks
        $('.time-block').each(function () {
          // creat something to loop over the blocks
          var now = parseInt($(this).attr('id').split('-')[[1]]); // convert my string to an interger...
          console.log(now)
          if (now < hour) {
            $(this).addClass('past');
          } else if (now === hour) {
            $(this).removeClass('past');
            $(this).addClass('present');
          } else {
            $(this).removeClass('past');
            $(this).addClass('future');
          }
        });
    
  }
      colorUpdater();      
       // coppy and paste for each.
      
      $("#hour-9 .information").val(localStorage.getItem('hour-9')); 
      $("#hour-10 .information").val(localStorage.getItem('hour-10')); 
      $("#hour-11 .information").val(localStorage.getItem('hour-11')); 
      $("#hour-12 .information").val(localStorage.getItem('hour-12')); 
      $("#hour-1 .information").val(localStorage.getItem('hour-1')); 
      $("#hour-2 .information").val(localStorage.getItem('hour-2')); 
      $("#hour-3 .information").val(localStorage.getItem('hour-3')); 
      $("#hour-4 .information").val(localStorage.getItem('hour-4')); 
      $("#hour-5 .information").val(localStorage.getItem('hour-5')); 
      $("#hour-6 .information").val(localStorage.getItem('hour-5')); 
      $("#hour-7 .information").val(localStorage.getItem('hour-5')); 
      $("#hour-8 .information").val(localStorage.getItem('hour-5')); 
      $("#hour-5 .information").val(localStorage.getItem('hour-5')); 

});  
