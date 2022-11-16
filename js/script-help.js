
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

//Open description boxes
function openDescription(descriptionId, headingId, arrowId) {
    var descriptionElement = document.getElementById(descriptionId);
    var headingElement = document.getElementById(headingId);
    var arrowElement=document.getElementById(arrowId);

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


//Show/Hide search bar

function showSearchbar() {
    var SearchIconElement = document.getElementById("help-search-button");
    var SearchBarElement = document.getElementById("search-bar");
    var KeyboardElement=document.getElementById("help-keyboard");
    var BackgroundContent=document.getElementById("help-content")

    if (SearchBarElement.style.visibility == "hidden") 
        {
            KeyboardElement.style.visibility ="visible";
            SearchBarElement.style.visibility="visible";
            BackgroundContent.style.filter= "blur(3px)";
            SearchIconElement.style.visibility="hidden";
        }
        
    else 
        {
            SearchBarElement.style.visibility = "hidden";
            KeyboardElement.style.visibility = "hidden";
            SearchIconElement.style.visibility= "visible";
            BackgroundContent.style.filter= "blur(0px)";
        }
}

