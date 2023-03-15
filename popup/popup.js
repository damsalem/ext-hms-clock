const timeElement = document.querySelector("#time");

// Run when extension is clicked
document.addEventListener("DOMContentLoaded", function () {
    setInterval(updateTime, 1);
});

function getTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
}

function updateTime() {
    const time = getTime();
    timeElement.innerHTML = time;
}

// TODO: Build color picker markup and fn
// TODO: Set default color in localState
