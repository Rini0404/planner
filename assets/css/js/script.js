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
    $('#saveButton').on('click', function(e) {
      e.preventDefault();
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
      function colorUpdater() {
        
      }

})
