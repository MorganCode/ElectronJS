// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

if (minutes < 10) {
    minutes = "0" + minutes;
}

document.write("it's " + hours + ":" + minutes + " o'clock")