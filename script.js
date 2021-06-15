const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minusEl = document.getElementById("minus");
const secondsEl = document.getElementById("seconds");







const newYears = "1 Jan 2021";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();


    const totalSeconds = (currentDate - newYearsDate) /
        1000;



    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minus = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;



    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minusEl.innerHTML = formatTime(minus);
    secondsEl.innerHTML = formatTime(seconds);


}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
//initial call
countdown();

setInterval(countdown, 1000)