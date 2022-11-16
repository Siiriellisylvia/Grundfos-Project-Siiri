
var date = new Date();
var current_date = date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear();
document.getElementById("date").innerHTML = current_date;

var time = new Date();
var current_time = date.getHours()+":"+(date.getMinutes());
document.getElementById("time").innerHTML = current_time;