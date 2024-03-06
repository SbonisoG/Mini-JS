const hours = document.getElementById("h");
const minutes = document.getElementById("m");
const seconds = document.getElementById("s");
const ampm = document.getElementById("ampm");



setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h > 12 ? "PM" : "AM";

    if(h > 12) {
        h -= 12;
    }

    h = (h < 10) ? "0" + h:h;
    m = (m < 10) ? "0" + m:m;
    s = (s < 10) ? "0" + s:s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
});

// Get the battery API
navigator.getBattery().then(function (battery) {
    // Battery level is between 0 and 1, so we multiply it by 100 to get in percents
    console.log('New charging state: ', battery.charging);
    console.log("Battery level: " + battery.level * 100 + "%");
    console.log('New time left until full: ', battery.chargingTime, " seconds");
    console.log('New time left until empty: ', battery.dischargingTime, " seconds");
})

// Get the battery API
// navigator.getBattery().then(function (battery) {
//     battery.addEventListener('chargingchange', function () {
//         console.log('New charging state: ', battery.charging);
//     });
//     battery.addEventListener('levelchange', function () {
//         console.log(" New battery level: ", battery.level * 100 + "%");
//     });
//     battery.addEventListener('chargingtimechange', function () {
//         console.log('New time left until full: ', battery.chargingTime, " seconds");
//     });
//     battery.addEventListener('dischargingtimechange', function () {
//         console.log('New time left until empty: ', battery.dischargingTime, " seconds");
//     });
// });
const btns = document.querySelectorAll(".nav-btn");

//add & remove active on btn
var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active")
    });

    btns[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});