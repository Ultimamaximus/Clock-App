function currentTime() {
    let date = new Date(); /* creating object of Date class */
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("Clock").innerText = hour + " : " + min + " : " + sec; /* links time to the div */
    let t = setTimeout(function(){ currentTime() }, 1000); /* updates the clock every second */
    let midday = "AM"; /* sets Am as default */
    midday = (hour >= 12) ? "PM" : "AM"; /* if condition is met midday becomes PM otherwise it stays AM */
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* Makes 0 = 12 and prevents * > 12 from showing up */
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime(); /* calling currentTime() function to initiate the process */


let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
document.getElementById("Date").innerText = cMonth + "/" + cDay + "/" + cYear;

