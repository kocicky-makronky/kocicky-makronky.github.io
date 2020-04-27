function setCountdown(date) {
  var distance = new Date(date).getTime() - new Date().getTime();
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = days + " days & " + hours + " hours " + minutes + ":" + seconds;
  document.getElementById("date").innerHTML = "Until " + date;
}
function runCountdown(targetDate, delay=1000) {
    setCountdown(targetDate);
    setInterval(function() {
      setCountdown(targetDate);
    }, delay);
}
