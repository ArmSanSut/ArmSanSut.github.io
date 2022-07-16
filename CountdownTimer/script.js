const daysEl = document.getElementById("days"); 
const hoursEl = document.getElementById("hours"); 
const minutesEl = document.getElementById("minutes"); 
const secondsEl = document.getElementById("seconds"); 


const newYears = "1 Jan 2023";

const countDown = ()=> {
    const currentDate = new Date();
    const newYearDate = new Date(newYears);

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60 ;
    const seconds = Math.floor(totalSeconds) % 60;

    // console.log(days, hours, minutes, seconds);
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
   
}

const formatTime = (time)=> {
    return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown, 1000);