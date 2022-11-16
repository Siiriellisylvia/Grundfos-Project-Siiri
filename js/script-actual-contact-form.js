function show(a){
    document.querySelector('.text02').value = a;
  }
  
  let dropdown = document.querySelector('.dropdown');
  dropdown.onclick = function(){
    dropdown.classList.toggle('active');
  }

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