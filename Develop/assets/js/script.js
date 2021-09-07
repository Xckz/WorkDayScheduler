// variable reference guide

var timeDisplayEl = $("#time-display");

function displayTime() {
    var now = moment().format("MMM Do, YYYY");
    $("#time-display").text(now);
}

setInterval(displayTime, 1000);
