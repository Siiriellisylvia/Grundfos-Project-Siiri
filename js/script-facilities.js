//left side navigation
//Date
var dateToday = new Date();
var dd = dateToday.getDate();
var mm = dateToday.getMonth() + 1;
var yyyy = dateToday.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}
dateToday = dd + "." + mm + "." + yyyy;
console.log(dateToday);
document.getElementById("date").innerHTML = dateToday;

//Time
function time() {
  var timeToday = new Date();
  var hh = timeToday.getHours();
  var mm = timeToday.getMinutes();
  if (hh < 10) {
    hh = "0" + hh;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  timeToday = hh + ":" + mm;
  console.log(timeToday);
  document.getElementById("time").innerHTML = timeToday;
}

setInterval(time, 1000);

//change opacity onCLick if desktop version

window.onresize = function () {
  location.reload();
};

var active_facility_id = null;
function changeImage(facility_element, fileName) {
  if (window.matchMedia("(max-width: 600px)").matches) {
    return;
  }
  // determine current facility ID
  active_facility_id =
    facility_element.id == active_facility_id ? null : facility_element.id;

  let img = document.querySelector("#original-layout");
  active_facility_id == null
    ? img.setAttribute("src", "images/none.JPG")
    : img.setAttribute("src", fileName);

  // fetch all facilities
  var facilities = document.getElementsByClassName("facility-element");

  // iterate over all facilities
  for (var i = 0; i < facilities.length; i++) {
    var opacity_value = null;

    if (active_facility_id == null) {
      opacity_value = "1";
    } else {
      opacity_value = facilities[i].id == active_facility_id ? "1" : "0.75";
    }

    facilities[i].getElementsByClassName("room-button")[0].style.opacity =
      opacity_value;
  }
}
