const timeElement = document.querySelector("#time");
const colorPicker = document.querySelector("#color");
const militarySelector = document.querySelector("#milTime");
let militaryTime = false;

// Run when extension is clicked
document.addEventListener("DOMContentLoaded", async function () {
    // Get state from storage
    const { milTime } = await chrome.storage.sync.get(["milTime"]);
    const { color = "#000000" } = await chrome.storage.sync.get(["color"]);

    // Set markup to state
    militarySelector.checked = milTime;
    militaryTime = milTime;
    colorPicker.value = color;
    timeElement.style.color = color;

    // Run time function
    setInterval(updateTime, 1);
});

// Handle military time toggle
militarySelector.addEventListener("click", function () {
    militaryTime = !militaryTime;
    chrome.storage.sync.set({ milTime: militaryTime });
});

// Handle color picker
colorPicker.addEventListener("change", function () {
    const color = colorPicker.value;
    timeElement.style.color = color;
    chrome.storage.sync.set({ color: color });
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
    return `${hours}:${minutes}:${seconds} <br/>${meridiem}`;
}

function updateTime() {
    const time = getTime();
    timeElement.innerHTML = time;
}
