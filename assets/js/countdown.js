function setCountdown(date) {
  var distance = new Date(date).getTime() - new Date().getTime();
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("countdown").innerHTML = days + " days & " + hours + " hours ";
  document.getElementById("date").innerHTML = "Until " + date;
}
function runCountdown(targetDate, delay=1000) {
    setCountdown(targetDate);
    setInterval(function() {
      setCountdown(targetDate);
    }, delay);
}
