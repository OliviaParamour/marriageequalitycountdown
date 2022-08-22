const countDownDate = new Date("Aug 23, 2037 20:00:00 +08");

const enddate =  document.createElement("p");
enddate.id = "enddate"
enddate.innerText = "End date: " + countDownDate.toLocaleString("en-GB", {timeZone: "Asia/Singapore"});

document.getElementById("timer-container").appendChild(enddate);

var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate.getTime() - now;

    // Time calculations for days, hours, minutes and seconds
    var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.2425));
    var days = Math.floor(distance % (1000 * 60 * 60 * 24  * 365.2425) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var cycles = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.2425 * 5));

    // Display the result in the element with id="demo"
    document.getElementById("year-day").innerHTML = years + " years " + days + " days";
    document.getElementById("hour-minute-seconds").innerHTML = hours + " hours "
    + minutes + " minutes " + seconds + " seconds ";
    document.getElementById("UPR").innerHTML = cycles + " Univeral Periodic Reviews";
    document.getElementById("GE").innerHTML = cycles + " General Elections";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "Marriage Equality is here!";
    }
  }, 1000);