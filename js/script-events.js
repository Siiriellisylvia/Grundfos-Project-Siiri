/* Events JS*/

function myPopUp1() {
  var myPopUp1 = window.open(
    "events-popup1.html",
    "",
    "width=700,height=400,top=200,left=550"
  );
  myPopUp1.focus();
}

function myPopUp2() {
  var myPopUp2 = window.open(
    "events-popup2.html",
    "",
    "width=700,height=400,top=200,left=550"
  );
  myPopUp2.focus();
}

function myPopUp3() {
  var myPopUp3 = window.open(
    "events-popup3.html",
    "",
    "width=700,height=400,top=200,left=550"
  );
  myPopUp3.focus();
}

function myCalendarPopUp() {
  var myCalendarPopUp = window.open(
    "events-popupcalendar.html",
    "",
    "width=800,height=650,top=100,left=500"
  );
  myCalendarPopUp.focus();
}

/*modal window*/

const modal = document.getElementById("myModal");
const btn1 = document.getElementById("eventListing1");

btn1.onclick = function () {
  modal.style.display = "block";
};

const modal2 = document.getElementById("myModal2");
const btn2 = document.getElementById("eventListing2");

btn2.onclick = function () {
  modal2.style.display = "block";
};

const modal3 = document.getElementById("myModal3");
const btn3 = document.getElementById("eventListing3");

btn3.onclick = function () {
  modal3.style.display = "block";
};

//close modal windows by clicking x
const modals = document.getElementsByClassName("modal");

for (const modalElement of modals) {
  var closeBtn = modalElement.querySelector(".close");

  closeBtn.onclick = function () {
    modalElement.style.display = "none";
  };
}

//close modal windows by clicking out of box

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.target == modal3) {
    modal3.style.display = "none";
  }
};

//modalElement is the modal window itself. 'for' is the loop, 'modalElement' is the modal window 'modals' is the class for all the modal windows
//so when looping through each modal window with the class modal, the closeBtn is the part of the modal window with the class 'close'
//when you click the closeBtn on the active modal window, the modalElement (modal window) is closed.

/*Another attempt - doesn't work for any of the modal windows

var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
btn[0].onclick = function () {
  modal[0].style.display = "block";
};

btn[1].onclick = function () {
  modal[1].style.display = "block";
};
btn[2].onclick = function () {
  modal[2].style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span[0].onclick = function () {
  modal[0].style.display = "none";
};

span[1].onclick = function () {
  modal[1].style.display = "none";
};
span[2].onclick = function () {
  modal[2].style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};*/

// One attempt (only works for the first modal window)

/*close modal windows*/
/*const span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};*/

//navigation script for date and time

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
