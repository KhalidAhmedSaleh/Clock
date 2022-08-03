"use strict";

const myClock = document.querySelector(".Myclock");

const showTime = function () {
  let currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let AMPM = "AM";

  if (hours === 0) {
    hours = 0;
  }

  if (hours > 12) {
    hours -= 12;
    AMPM = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = `${hours}:${minutes}:${seconds} ${AMPM}`;
  myClock.textContent = time;

  setTimeout(showTime, 1000);
};

showTime();
