const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');


const newYears = new Date('Jan 1,2022 00:00:00')


function getDays(time) {
    return Math.floor(time/(3600*24))
}
function getHours(time) {
    return Math.floor(time/3600) % 24;
}
function getMins(time) {
    return Math.floor(time/60) % 60;
}
function getSeconds(time) {
    return time % 60;
}


function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const dateDiff = Math.floor((newYearsDate-currentDate)/1000);


    const days = getDays(dateDiff);
    const hours = getHours(dateDiff);
    const mins = getMins(dateDiff);
    const seconds = getSeconds(dateDiff);


    daysElement.innerHTML = days;
    hoursElement.innerHTML = formetTime(hours);
    minsElement.innerHTML = formetTime(mins);
    secondsElement.innerHTML = formetTime(seconds);
}


function formetTime(time) {
    return time < 10 ? (`0${time}`) : time;
}


countdown();
setInterval(countdown, 1000);