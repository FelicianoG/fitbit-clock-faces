import clock from "clock";
import * as document from "document";

var unlit = document.getElementById("unlit");
var bswitch = document.getElementById("switch");

clock.granularity = "seconds";

var switchState = true;

unlit.style.opacity = 1;

bswitch.addEventListener("click", (evt) => {
  if (switchState) {
    unlit.style.opacity = 0;
    switchState = false;
  } else {
    unlit.style.opacity = 1;
    switchState = true;
  }
});

// Returns an angle (0-360) for the current hour in the day, including minutes
function hoursToAngle(hours, minutes) {
  let hourAngle = (360 / 12) * hours;
  let minAngle = (360 / 12 / 60) * minutes;
  return hourAngle + minAngle;
}

// Returns an angle (0-360) for minutes
function minutesToAngle(minutes) {
  return (360 / 60) * minutes;
}

function secondsToAngle(seconds) {
  return (360 / 60) * seconds;
}

var hourHand = document.getElementById("hour");
var minHand = document.getElementById("minute");
var secondHand = document.getElementById("second");

// Rotate the hands every tick
function updateClock() {
  let today = new Date();
  let hours = today.getHours() % 12;
  let mins = today.getMinutes();
  let secs = today.getSeconds();

  hourHand.startAngle = hoursToAngle(hours, mins);
  minHand.startAngle = minutesToAngle(mins);
  secondHand.startAngle = secondsToAngle(secs);
}
clock.addEventListener("tick", updateClock);
