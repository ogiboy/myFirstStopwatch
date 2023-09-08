// buttons //
const startBtn = document.querySelectorAll("button")[0];
const stopBtn = document.querySelectorAll("button")[1];
const resetBtn = document.querySelectorAll("button")[2];
// watch //
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const miliseconds = document.getElementById("milisec");
// starting values //
let hour = 0,
  minute = 0,
  second = 0,
  milisecond = 0,
  timer = null;
// button functionality //
// Start
startBtn.addEventListener("click", function () {
  if (!timer) {
    timer = setInterval(stopWatch, 10);
  }
});
// Stop
stopBtn.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
});
// Reset
resetBtn.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
  hour = 0;
  minute = 0;
  second = 0;
  milisecond = 0;
  updateDisplay();
});
// Logic //
function stopWatch() {
  if (timer) {
    milisecond++;
    if (milisecond === 100) {
      second++;
      milisecond = 0;
    }
    if (second === 60) {
      minute++;
      second = 0;
    }
    if (minute === 60) {
      hour++;
      minute = 0;
      second = 0;
    }
    updateDisplay();
  }
}

function updateDisplay() {
  hours.innerHTML = hour < 10 ? "0" + hour : hour;
  minutes.innerHTML = minute < 10 ? "0" + minute : minute;
  seconds.innerHTML = second < 10 ? "0" + second : second;
  miliseconds.innerHTML = milisecond < 10 ? "0" + milisecond : milisecond;
}
