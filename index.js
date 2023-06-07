// Caching DOM elements
const clockElement = document.getElementById("Clock");
const dateElement = document.getElementById("Date");

// Function to display current time
function currentTime() {
  // Getting current time
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  // Determining AM or PM
  let midday = (hour >= 12) ? "PM" : "AM";

  // Formatting time with leading zeros
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);

  // Converting hour to 12-hour format
  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);

  // Creating the time string and updating the clock element
  const currentTimeString = hour + " : " + min + " : " + sec + " " + midday;
  clockElement.innerText = currentTimeString;

  // Getting current date
  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();

  // Updating the date element
  dateElement.innerText = cMonth + "/" + cDay + "/" + cYear;

  // Scheduling the function to run again after 1 second
  setTimeout(currentTime, 1000);
}

// Function to add leading zeros to numbers less than 10
function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}

// Calling currentTime() function to initiate the process
currentTime();
