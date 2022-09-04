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
    const minute = 1000 * 60
    const year = minute * 60 * 24 * 365.2425
    // Time calculations for days, hours, minutes and seconds
    var years = Math.floor(distance / (year));
    var days = Math.floor(distance % (year) / (minute * 60 * 24));
    var hours = Math.floor((distance % (minute * 60 * 24)) / (minute * 60));
    var minutes = Math.floor((distance % (minute * 60)) / (minute));
    var seconds = Math.floor((distance % (minute)) / 1000);
    var ge = Math.floor((distance + 4 * year) / (year * 5));
    var upr = Math.floor((distance + 5 * year) / (year * 5));

    // Display the result in the element with id="demo"
    document.getElementById("year-day").innerHTML = years + " years " + days + " days";
    document.getElementById("hour-minute-seconds").innerHTML = hours + " hours "
    + minutes + " minutes " + seconds + " seconds ";
    document.getElementById("UPR").innerHTML = upr + " Univeral Periodic Reviews";
    document.getElementById("GE").innerHTML = ge + " General Elections";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "Marriage Equality is here!";
    }
  }, 1000);