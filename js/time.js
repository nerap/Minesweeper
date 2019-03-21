var interval;
var currentDate;
var currentTimer;



function return_format(current){
    var milli = current % 1000;
    var seconds = Math.floor(current / 1000) % 60;
    var minutes = Math.floor(current / 60000) % 60;
    var tab = [minutes, seconds, milli];
    return tab.join(":");
}


function start(){
    current_date = Date.now();
    interval = setInterval(function () {
        current_timer = Date.now() - current_date;
        var timer = document.getElementById('timer');
        timer.textContent = return_format(current_timer);
    }, 25);
}

function reset(){
    var timer = document.getElementById('timer');
    timer.textContent = "00:00:00"
    clearInterval(interval);
}

