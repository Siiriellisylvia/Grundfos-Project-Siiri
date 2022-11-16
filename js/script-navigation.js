
// var date = new Date();
// 	var current_date = date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear();
// 	document.getElementById("date").innerHTML = current_date;

// var time = new Date();
//   var current_time = date.getHours()+":"+(date.getMinutes());
//   document.getElementById("time").innerHTML = current_time;

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
