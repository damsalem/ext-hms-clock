const timeElement = document.querySelector("#time");

// Run when extension is clicked
document.addEventListener("DOMContentLoaded", function () {
    setInterval(updateTime, 1);
});

function getTime() {
    const now = new Date();

    // Get the hours, minutes, seconds
    let meridiem = "am";
    let hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    // check if hours is greater than 12 and subtract 12 if it is
    if (hours > 12) {
        meridiem = "pm";
        hours -= 12;
    }
    return `${hours}:${minutes}:${seconds} ${meridiem}`;
}

function updateTime() {
    const time = getTime();
    timeElement.innerHTML = time;
}

// TODO: Build 12-24 hour time toggler
// TODO: Set time toggler in localState
// TODO: Build color picker markup and fn
// TODO: Set default color in localState
