// variable reference guide

var currentTime = moment().format("H");
var descriptionEl = $(".description");
var timeDisplayEl = $("#time-display");
var timeOfDay = $(".log");

// handles displaying time at the top of the page
function displayTime() {
    var now = moment().format("MMM Do, YYYY");
    $("#time-display").text(now);
}

// handles changing the schedule event box based on the time of day
var scheduleTime = () => {
    for (var i = 0; i < timeOfDay.length; i++) {
        var timeOfDayEl = timeOfDay[i].id;

        var timeChange = document.getElementById(timeOfDay[i].id);

        if (timeOfDayEl < currentTime) {
            $(timeChange).addClass("past");
        } else if (timeOfDayEl > currentTime) {
            $(timeChange).addClass("future");
        } else {
            $(timeChange).addClass("present");
        }
    }
};

setInterval(scheduleTime, 1000);
setInterval(displayTime, 1000);

console.log(currentTime);
