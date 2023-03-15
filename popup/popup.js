const timeElement = document.querySelector("#time");
const colorPicker = document.querySelector("#color");
const militarySelector = document.querySelector("#milTime");
let militaryTime = false;

// Run when extension is clicked
document.addEventListener("DOMContentLoaded", function () {
    setInterval(updateTime, 1);
});

// Handle military time toggle
militarySelector.addEventListener("click", function () {
    militaryTime = !militaryTime;
});

// Handle color picker
colorPicker.addEventListener("change", function () {
    timeElement.style.color = colorPicker.value;
});

function getTime() {
    const now = new Date();

    // Get the hours, minutes, seconds
    let meridiem = "am";
    let hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    if (militaryTime === true) {
        return `${hours}:${minutes}:${seconds}`;
    }

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

// TODO: Set time toggler in localState
// TODO: Build color picker markup and fn
// TODO: Set default color in localState
