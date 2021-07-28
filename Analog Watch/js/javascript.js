setInterval(() => {
    var date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    // hour 
    // 1 hr -> 30 degree
    // 60 min -> 30 degree
    // 1 min -> 1/2 degree 
    var hour1;
    if (hour>=12) {
        hour1 = hour - 12;
    }
    var rotateHour = ((hour1*60)+minute)/2;
    // minute
    // 1 min -> 6 degree
    var rotateMinute = 6*minute;
    // second
    var rotateSecond = 6*second;

    seconds.style.transform = `rotate(${rotateSecond}deg)`;
    minutes.style.transform = `rotate(${rotateMinute}deg)`;
    hours.style.transform = `rotate(${rotateHour}deg)`;

    // Getting Time Digitally
    document.getElementById(`h`).innerHTML = hour1 + ` / `;
    document.getElementById(`m`).innerHTML = minute + ` / `;
    document.getElementById(`s`).innerHTML = second;

    }, 1000);


