const currentDate = new Date();
const currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1; // Add 1 to get the correct month (JavaScript months are zero-indexed)

// Check if the month is a single digit
if (currentMonth < 10) {
  currentMonth = "0" + currentMonth;
}

let currentDay = currentDate.getDate();
if (currentDay < 10) {
  currentDay = "0" + currentDay;
}

// Combine the year, month, and day into a string in the format YYYY-MM-DD
const formattedDate = `${currentDay}.${currentMonth}.${currentYear}`;

console.log(formattedDate);
const dateEl = document.querySelector(".date");
console.log(dateEl);
dateEl.innerHTML = formattedDate;
console.log("hello world!");


const currentDate2 = new Date();
const options = {
  weekday: "long"
};
const formattedDate2 = currentDate.toLocaleString("uk-UA", options);
 document.querySelector(".day").innerHTML = formattedDate2
console.log(formattedDate2);
const day = document.querySelector(".day")
console.log(day.innerHTML)
if (day.innerHTML === "пʼятниця") {
  day.style.left = "6px";
}
if (day.innerHTML === "вівторок") {
  day.style.left = "8px";
}if (day.innerHTML === "понеділок") {
  day.style.left = "2px";}
  if (day.innerHTML === "середа") {
    day.style.left = "11px";
  }
  if (day.innerHTML === "четвер") {
    day.style.left = "12px";
  }
   if (day.innerHTML === "субота") {
     day.style.left = "13px";
   }
   if (day.innerHTML === "неділя") {
     day.style.left = "13px";
   }

console.log(day.innerHTML.length)


const dates = [];
const formatter = new Intl.DateTimeFormat('uk-UA', { month: 'short' });
let currentDate3 = new Date();

for (let i = 0; i < 3; i++) {
  const currentMonth = formatter.format(currentDate3);
  const currentDay = currentDate3.getDate();
  const formattedDate = `${currentDay} ${currentMonth}`;
  dates.push(formattedDate);
  currentDate3.setDate(currentDate3.getDate() + 1);
}

console.log(dates); // ["11 тра", "12 тра", "13 тра"]
const day_2 = document.querySelector(".day_2").innerHTML = dates[1]
const day_3 = document.querySelector(".day_3").innerHTML = dates[2];

/* апи */
