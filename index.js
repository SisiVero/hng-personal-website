// current time function
function currentTimeUTC() {
    let currentTime = new Date();
    let hours = currentTime.getUTCHours();
    let minutes = currentTime.getUTCMinutes();
    let seconds = currentTime.getUTCSeconds();

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let time = hours + ':' + minutes + ':' + seconds + ': UTC';
    document.getElementById('current-time').textContent = time;
}


currentTimeUTC();

// Updates every 1 second
setInterval(currentTimeUTC, 1000);




// current day function
function updateDay() {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let currentDay = new Date().getDay(); 

    document.getElementById('current-day').textContent = days[currentDay];
    console.log(currentDay);
}
updateDay();
