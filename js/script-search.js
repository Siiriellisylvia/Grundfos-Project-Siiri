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



//Show/Hide search bar

function openSearchbar(descriptionId, headingId, arrowId) {
    var SearchIconElement = document.getElementById(descriptionId);
    var SearchBarElement = document.getElementById(headingId);
    var KeyboardElement=document.getElementById(arrowId);

    if (descriptionElement.style.display === "none") 
        {
            
            headingElement.style.borderRadius = "10px 10px 0px 0px"
            headingElement.style.backgroundColor = "#10828c";
            headingElement.style.color = "white";
            arrowElement.style.borderColor = "white";
            descriptionElement.style.display = "block";
        } 
        else 
        {
            headingElement.style.borderRadius = "10px 10px 10px 10px"
            headingElement.style.backgroundColor = "#aacfd3";
            headingElement.style.color = "black";
            arrowElement.style.borderColor = "black";
            descriptionElement.style.display = "none";
        }
}