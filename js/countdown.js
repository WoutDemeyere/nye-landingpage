var countDownDate = new Date("Dec 31, 2020 22:30:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
  
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.querySelector(".js-timer").innerHTML ="Nog " + days + "d " + hours + "h " 
    + minutes + "m " + seconds + "s " + "tot de stream start";
  
    if (distance < 0) {
      clearInterval(x);
      document.querySelector(".js-timer").innerHTML = "EXPIRED";
    }
  }, 1000);