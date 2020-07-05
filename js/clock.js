const clockContainer = document.querySelector(".js-clock");
const clockTime = clockContainer.querySelector("h1");

let minute;
let hour;
let second;

function getTime(){
    const date = new Date();
    minute = date.getMinutes();
    hour = date.getHours();
    second = date.getSeconds();
    clockTime.innerHTML = `${
        hour < 10 ? `0${hour}`:`${hour}`
    }:${
        minute < 10 ? `0${minute}`:`${minute}`
    }:${
        second < 10 ? `0${second}`:`${second}`
    }`;
}

function init() {
    setInterval(getTime, 100);
}
init();