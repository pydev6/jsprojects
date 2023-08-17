// Variables for buttons

const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

// Variables for time values

let milliSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variable for leading zero
let leadingMilliseconds = 0;
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for set interval & timerstatus

let timerInterval = null;
let timerStatus = "stopped";

// Stop Watch Function

function stopWatch() {
  milliSeconds++;

  if (milliSeconds / 10 === 1) {
    milliSeconds = 0;
    seconds++;
    if (seconds / 60 === 1) {
      seconds = 0;
      minutes++;
      if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
      }
    }
  }

  if (milliSeconds < 10) {
    leadingMilliseconds = "0" + milliSeconds.toString();
  } else {
    leadingMilliseconds = milliSeconds;
  }
  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  document.querySelector("#timer").innerText =
    leadingHours +
    ":" +
    leadingMinutes +
    ":" +
    leadingSeconds +
    ":" +
    leadingMilliseconds;
}

// window.setInterval(stopWatch, 500);

startStopBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 100);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause">stop</i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = ` <i class="fa-solid fa-play" id="play">play</i>`;
    timerStatus = "stopped";
  }
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerHTML = "00:00:00:00";
  document.getElementById(
    "startStopBtn"
  ).innerHTML = ` <i class="fa-solid fa-play" id="play">play</i>`;
});
