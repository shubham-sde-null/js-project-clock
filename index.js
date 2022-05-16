let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
// Even if I don't write above lines then also my code is running
setInterval(() => {
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    console.log(date, htime);
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
console.log(hour);
console.log(minute);