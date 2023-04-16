const secondsEl  = document.getElementById('seconds');
const minutesEl = document.getElementById('minutes');
const hoursEl = document.getElementById('hours');
const daysEl = document.getElementById('days');
//grtElementById: all this crap gets the access to the different IDs from the HTML and referes it to JS


const newYears = '1 Jan 2024';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const timeInMS = newYearsDate - currentDate;

    const seconds = Math.floor(timeInMS /1000)%60;
    const minutes = Math.floor(timeInMS/(1000*60)) % 60;
    const hours =Math.floor(timeInMS/(1000*60*60)) % 24;
    const days = Math.floor(timeInMS/(1000*60*60*24));

    console.log(days,hours,minutes,seconds);

    secondsEl.innerHTML = formatTime(seconds);
    minutesEl.innerHTML =  formatTime(minutes);
    hoursEl.innerHTML =  formatTime(hours);
    daysEl.innerHTML =  formatTime(days);
//innnerHTML: with the help of this function we are able to change the HTML directly 
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


//intial call
setInterval(countdown, 1000);

countdown();
