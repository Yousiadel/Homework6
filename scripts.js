// =====================================
// Get Date
// =====================================


var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    day = addZero(date.getDate()),
    months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

document.getElementById('month').innerHTML = months[month],
    document.getElementById('date').innerHTML = day;
document.getElementById('year').innerHTML = year;

// =====================================
// Get Time
// =====================================

function addZero(i) {
    // This checks to see if the number is below 10 and then prepends a '0' - clever shit :P
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function newTime() {
    var d = new Date();
    var h = addZero(d.getHours());
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12; // the hour '0' should be '12'
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var x = document.getElementById("hourminute");

    x.innerHTML = h + ':' + m + ' ' + ampm;
}

newTime();
setInterval(newTime, 1000);

// =====================================
// Weather
// =====================================

$(document).ready(function () {
    //get weather data by autoip.
    $.ajax({
        url: "http://api.wunderground.com/api/1b687596ec8ccd43/geolookup/conditions/q/autoip.json",
        dataType: "jsonp",
        success: function (parsed_json) {

            var temp_f = parsed_json['current_observation']['temp_f'];
            var condition = parsed_json['current_observation']['weather']
            var locale = parsed_json['current_observation']['display_location']['full']
            $('#temperature').html(temp_f.toFixed(0) + "°");
            $('#weather').html(condition);
            $('#location').html(locale);
        }
    });
});