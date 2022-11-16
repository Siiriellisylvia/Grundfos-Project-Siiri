//left side nav bar
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

// First timer Washing Machine
const startingMinutes = 10;
let timeOne = startingMinutes * 60;

let countdownEl = document.querySelector(".countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(timeOne / 60);
  let seconds = timeOne % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (timeOne < 0) {
    countdownEl.innerHTML = `Free`;
  } else {
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    timeOne--;
  }
}

// Second timer Washing Machine
const startingMinutesTwo = 0.1;
let timeTwo = startingMinutesTwo * 60;

let countdownElTwo = document.querySelector("#countdown-two");

setInterval(updateCountdownTwo, 1000);

function updateCountdownTwo() {
  const minutesTwo = Math.floor(timeTwo / 60);
  let secondsTwo = timeTwo % 60;

  secondsTwo = secondsTwo < 10 ? "0" + secondsTwo : secondsTwo;

  if (timeTwo < 0) {
    countdownElTwo.innerHTML = `Free`;
    document.querySelector(".status-taken-one").className = "status-free";
    document.querySelector(".machine-number-taken-one").className =
      "machine-number";
    ("status-free");
  } else {
    countdownElTwo.innerHTML = `${minutesTwo}:${secondsTwo}`;
    timeTwo--;
  }
}
// Third timer Drying Machine
const startingMinutesThree = 21.6;
let timeThree = startingMinutesThree * 60;

let countdownElThree = document.querySelector("#countdown-three");

setInterval(updateCountdownThree, 1000);

function updateCountdownThree() {
  const minutesThree = Math.floor(timeThree / 60);
  let secondsThree = timeThree % 60;

  secondsThree = secondsThree < 10 ? "0" + secondsThree : secondsThree;

  if (timeThree < 0) {
    countdownElThree.innerHTML = `Free`;
  } else {
    countdownElThree.innerHTML = `${minutesThree}:${secondsThree}`;
    timeThree--;
  }
}

//Popular Times Chart

const labels = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My first Data",
      //backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(0, 0,0)",
      data: [0, 15, 10, 30, 30, 20, 50, 58],
      borderWidth: 5,
      borderCapStyles: "round",
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          borderColor: "black",
          borderWidth: 2,
          display: false,
        },
        ticks: {
          color: "black",
          font: {
            size: 15,
          },
        },
      },
      y: {
        grid: {
          borderColor: "black",
          borderWidth: 2,
          display: false,
        },
        ticks: {
          display: false,
        },
        title: {
          display: true,
          text: "Occupancy",
          font: {
            size: 20,
            family: "'Roboto', sans-serif",
            weight: "bold",
            lineHeight: 1,
          },
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
    animations: {
      tension: {
        duration: 2000,
        easing: "linear",
        from: 1,
        to: 0.3,
        loop: false,
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);
