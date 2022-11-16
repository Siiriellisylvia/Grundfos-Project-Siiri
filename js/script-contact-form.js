const passwordField = document.querySelector("#password");
const eyeIcon = document.querySelector("#eye");

eye.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
  })

  const toggleModal = () => {
    const { classList } = document.body;
    if (classList.contains("open")) {
      classList.remove("open");
      classList.add("closed");
    } else {
      classList.remove("closed");
      classList.add("open");
    }
  };


/*eye.addEventListener("click", function () {
  this.classList.toggle("fa-eye-slash");
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});

eye.addEventListener("click", function () {
  passwordField.setAttribute("type", type);
});*/

//Date
var dateToday = new Date();
var dd = dateToday.getDate();
var mm = dateToday.getMonth()+1; 
var yyyy = dateToday.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
dateToday = dd+'.'+mm+'.'+yyyy;
console.log(dateToday);
document.getElementById("date").innerHTML = dateToday;


//Time
function time() {
var timeToday = new Date();
var hh = timeToday.getHours();
var mm = timeToday.getMinutes(); 
if(hh<10) 
{
    hh='0'+hh;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
timeToday = hh+':'+mm;
console.log(timeToday);
document.getElementById("time").innerHTML = timeToday;
}

setInterval(time, 1000);

