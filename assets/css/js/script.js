var dateCurrent  = document.getElementById('time-display');


var timerInterval = setInterval(function() {
  dateCurrent.innerHTML = moment().format("MMM Do YY");  
}, 1000);

console.log("ayo")
