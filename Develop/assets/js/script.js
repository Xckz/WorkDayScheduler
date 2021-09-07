// variable reference guide

var timeDisplayEl = $("#time-display");
var descriptionEl = $(".description");

// handles displaying time at the top of the page
function displayTime() {
    var now = moment().format("MMM Do, YYYY");
    $("#time-display").text(now);
}

setInterval(displayTime, 1000);

// planEl.text("text");

$("description").click();
