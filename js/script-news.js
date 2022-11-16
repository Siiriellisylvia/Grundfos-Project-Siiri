/*News JS*/

/* global variable clicked true or false state*/
/* second event listener - if clicked so this, else do this*/

//hide the clear filter button from the start
const elem = document.getElementById("clearFilterButton");
elem.style.display = "none";

//function to filter news articles

function filterArticles(showClass) {
  for (const selection of document.getElementsByClassName("newsArticle")) {
    selection.classList.add("hidden");
  }
  for (const selection of document.getElementsByClassName(showClass)) {
    selection.classList.remove("hidden");
  }
}

//function to show all news articles when clicking the news icon a 2nd time (1st time to filter, 2nd time to remove filter)

function secondClick() {
  for (const secondClick of document.getElementsByClassName("newsArticle")) {
    if ((secondClick.classList.display = "hidden")) {
      secondClick.classList.remove("hidden");
    }
  }
}

//function to show all news articles when clicking clear filter icon

function showArticles() {
  for (const showAll of document.getElementsByClassName("newsArticle")) {
    showAll.classList.remove("hidden");
    const mainColour = document.getElementById("newsIconMaintenance");
    mainColour.src = "images/maintenance_icon.svg";
    const commColour = document.getElementById("newsIconCommunity");
    commColour.src = "images/community_icon.svg";
    const launColour = document.getElementById("newsIconLaundry");
    launColour.src = "images/laundry_icon.svg";
    const outdColour = document.getElementById("newsIconOutdoor");
    outdColour.src = "images/outdoor_icon.svg";
    const holiColour = document.getElementById("newsIconHolidays");
    holiColour.src = "images/holidays_icon.svg";
  }
}

//function to change news icon colours on click

function maintenanceColour() {
  const mainColour = document.getElementById("newsIconMaintenance");
  mainColour.src = "images/colour_maintenance_icon.svg";
  const commColour = document.getElementById("newsIconCommunity");
  commColour.src = "images/community_icon.svg";
  const launColour = document.getElementById("newsIconLaundry");
  launColour.src = "images/laundry_icon.svg";
  const outdColour = document.getElementById("newsIconOutdoor");
  outdColour.src = "images/outdoor_icon.svg";
  const holiColour = document.getElementById("newsIconHolidays");
  holiColour.src = "images/holidays_icon.svg";
}

function communityColour() {
  const commColour = document.getElementById("newsIconCommunity");
  commColour.src = "images/colour_community_icon.svg";
  const mainColour = document.getElementById("newsIconMaintenance");
  mainColour.src = "images/maintenance_icon.svg";
  const launColour = document.getElementById("newsIconLaundry");
  launColour.src = "images/laundry_icon.svg";
  const outdColour = document.getElementById("newsIconOutdoor");
  outdColour.src = "images/outdoor_icon.svg";
  const holiColour = document.getElementById("newsIconHolidays");
  holiColour.src = "images/holidays_icon.svg";
}

function laundryColour() {
  const launColour = document.getElementById("newsIconLaundry");
  launColour.src = "images/colour_laundry_icon.svg";
  const mainColour = document.getElementById("newsIconMaintenance");
  mainColour.src = "images/maintenance_icon.svg";
  const commColour = document.getElementById("newsIconCommunity");
  commColour.src = "images/community_icon.svg";
  const outdColour = document.getElementById("newsIconOutdoor");
  outdColour.src = "images/outdoor_icon.svg";
  const holiColour = document.getElementById("newsIconHolidays");
  holiColour.src = "images/holidays_icon.svg";
}

function outdoorColour() {
  const outdColour = document.getElementById("newsIconOutdoor");
  outdColour.src = "images/colour_outdoor_icon.svg";
  const mainColour = document.getElementById("newsIconMaintenance");
  mainColour.src = "images/maintenance_icon.svg";
  const commColour = document.getElementById("newsIconCommunity");
  commColour.src = "images/community_icon.svg";
  const launColour = document.getElementById("newsIconLaundry");
  launColour.src = "images/laundry_icon.svg";
  const holiColour = document.getElementById("newsIconHolidays");
  holiColour.src = "images/holidays_icon.svg";
}

function holidaysColour() {
  const holiColour = document.getElementById("newsIconHolidays");
  holiColour.src = "images/colour_holidays_icon.svg";
  const mainColour = document.getElementById("newsIconMaintenance");
  mainColour.src = "images/maintenance_icon.svg";
  const commColour = document.getElementById("newsIconCommunity");
  commColour.src = "images/community_icon.svg";
  const launColour = document.getElementById("newsIconLaundry");
  launColour.src = "images/laundry_icon.svg";
  const outdColour = document.getElementById("newsIconOutdoor");
  outdColour.src = "images/outdoor_icon.svg";
}

/*click maintenance filter*/

document
  .getElementById("maintenanceFilterButton")
  .addEventListener("click", maintenanceFunction);
function maintenanceFunction() {
  maintenanceFilterButton.style.color = "#eba10c"; //change colour of icon wording
  communityFilterButton.style.color = "#000000";
  laundryFilterButton.style.color = "#000000";
  outdoorFilterButton.style.color = "#000000";
  holidaysFilterButton.style.color = "#000000";
  filterArticles("maintenanceArticle"); //filter maintenance articles using filterArticles function above
  /*secondClick(); //show all news articles again when clicking the news icon a 2nd time*/
}

document
  .getElementById("maintenanceFilterButton")
  .addEventListener("click", showFunction);
function showFunction() {
  elem.style.display = "block"; //show clear filter option
}

//***display only maintenance items

/*click community filter*/

document
  .getElementById("communityFilterButton")
  .addEventListener("click", communityFunction);
function communityFunction() {
  communityFilterButton.style.color = "#eba10c"; //change colour of icon wording
  maintenanceFilterButton.style.color = "#000000";
  laundryFilterButton.style.color = "#000000";
  outdoorFilterButton.style.color = "#000000";
  holidaysFilterButton.style.color = "#000000";
  filterArticles("communityArticle"); //filter community articles using filterArticles function above
}

document
  .getElementById("communityFilterButton")
  .addEventListener("click", showFunction);
function showFunction() {
  elem.style.display = "block"; //show clear filter option
}

/*click laundry filter*/
document
  .getElementById("laundryFilterButton")
  .addEventListener("click", laundryFunction);
function laundryFunction() {
  laundryFilterButton.style.color = "#eba10c"; //change colour of icon wording
  maintenanceFilterButton.style.color = "#000000";
  communityFilterButton.style.color = "#000000";
  outdoorFilterButton.style.color = "#000000";
  holidaysFilterButton.style.color = "#000000";
  filterArticles("laundryArticle"); //filter laundry articles using filterArticles function above
}

document
  .getElementById("laundryFilterButton")
  .addEventListener("click", showFunction);
function showFunction() {
  elem.style.display = "block"; //show clear filter option
}

/*click outdoor filter*/
document
  .getElementById("outdoorFilterButton")
  .addEventListener("click", outdoorFunction);
function outdoorFunction() {
  outdoorFilterButton.style.color = "#eba10c"; //change colour of icon wording
  maintenanceFilterButton.style.color = "#000000";
  communityFilterButton.style.color = "#000000";
  laundryFilterButton.style.color = "#000000";
  holidaysFilterButton.style.color = "#000000";
  filterArticles("outdoorArticle"); //filter outdoor articles using filterArticles function above
}

document
  .getElementById("outdoorFilterButton")
  .addEventListener("click", showFunction);
function showFunction() {
  elem.style.display = "block"; //show clear filter option
}

/*click holidays filter*/
document
  .getElementById("holidaysFilterButton")
  .addEventListener("click", holidaysFunction);
function holidaysFunction() {
  holidaysFilterButton.style.color = "#eba10c"; //change colour of icon wording
  maintenanceFilterButton.style.color = "#000000";
  communityFilterButton.style.color = "#000000";
  laundryFilterButton.style.color = "#000000";
  outdoorFilterButton.style.color = "#000000";
  filterArticles("holidaysArticle"); //filter holidays articles using filterArticles function above
}

document
  .getElementById("holidaysFilterButton")
  .addEventListener("click", showFunction);
function showFunction() {
  elem.style.display = "block"; //show clear filter option
}

/*click clear filter*/
document
  .getElementById("clearFilterButton")
  .addEventListener("click", clearFilterFunction);
function clearFilterFunction() {
  maintenanceFilterButton.style.color = "#000000"; //change colour of icon wording
  communityFilterButton.style.color = "#000000";
  laundryFilterButton.style.color = "#000000";
  outdoorFilterButton.style.color = "#000000";
  holidaysFilterButton.style.color = "#000000";
  showArticles();
}

/*Dropdown for mobile version*/
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function newsDrop() {
  document.getElementById("myDropdown").classList.toggle("show");
  /*document.getElementById("dropClick").style.borderRadius = "15px 15px 0px 0px";*/
  document.getElementById("dropClick").classList.toggle("straighten");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    /*var Close = document.getElementById("dropClick");
    if ((Close.style.borderRadius = "15px 15px 0px 0px")) {
      Close.style.borderRadius = "15px";
    }*/
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }

    var straighten = document.getElementById("dropClick");
    if (straighten.classList.contains("straighten")) {
      straighten.classList.remove("straighten");
    }
  }
};

//Navigation date and time script

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

// border radius mobile version
/*function borderRadius() {
  var dropdownElement = document.getElementById(myDropdown);
  var headerBoxElement = document.getElementById(dropClick);

  if (dropdownElement.style.display === "none") {
    headerBoxElement.style.borderRadius = "15px 15px 0px 0px";
    dropdownElement.style.display = "block";
  } else {
    headerBoxElement.style.borderRadius = "15px 15px 15px 15px";
    dropdownElement.style.display = "none";
  }
}*/
