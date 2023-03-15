const time = document.querySelector("#time");

// Run when extension is clicked
document.addEventListener("DOMContentLoaded", function () {
    console.log("opened");
    time.innerHTML = "12:00:00";
});
