// If timer is paused, subValue = 1;
var subValue = 1;
var timerFrom = 900; // Is the time set for the timer (default value)
var timeToTimer;

function setDefaultTime() {
    timeToTimer = getMinutes(timerFrom);
    document.getElementById("mainTimer").innerHTML = timeToTimer.min + ":" + timeToTimer.sec;
}

function getMinutes(time) {
    var min = Math.floor(time / 60);
    var sec = time - (min * 60);
    if (sec < 10) sec = "0" + sec;
    if (min < 10) min = "0" + min;
    var timeToSet = {
        "min" : min,
        "sec" : sec
    }

    return timeToSet;
}

function setTimer(time) {
    timerFrom = time;
    setDefaultTime();
}

function pauseTimer() {
    document.getElementById("pauseButton").classList.add("buttonHidden");
    document.getElementById("restartButton").classList.remove("buttonHidden");
    subValue = 0;
}

function restartTimer() {
    document.getElementById("pauseButton").classList.remove("buttonHidden");
    document.getElementById("restartButton").classList.add("buttonHidden");
    subValue = 1;
}

function stopTimer() {
    setDefaultTime();
    document.getElementById("startButton").classList.remove("buttonHidden");
    document.getElementById("controlButtons").classList.add("buttonHidden");
    subValue = -1;
}

function startTimer(time)
{
    document.getElementById("startButton").classList.add("buttonHidden");
    document.getElementById("controlButtons").classList.remove("buttonHidden");
    
    subValue = 1;
    var timeCountDown = time;
    var timer = setInterval(function() 
{
    if (subValue < 0) {
        clearInterval(timer);
        return;
    }
    timeCountDown = timeCountDown - subValue;
    timeToTimer = getMinutes(timeCountDown);
    document.getElementById("mainTimer").innerHTML = timeToTimer.min + ":" + timeToTimer.sec;

    if (timeCountDown === 0)
    {
        clearInterval(timer);
        document.getElementById("mainTimer").innerHTML = "EXPIRED!!";
    }
}, 1000);
}

