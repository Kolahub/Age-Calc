// ***** SELECT ITEMS ********
const dayValue = document.querySelector(".input__day");
const monthValue = document.querySelector(".input__month");
const yearValue = document.querySelector(".input__year");
const yearNum = document.querySelector(".year_num");
const monthNum = document.querySelector(".month_num");
const dayNum = document.querySelector(".day_num");
const btn = document.querySelector(".svg");
const inputBox = document.querySelectorAll(".inputBox");
const labelBox = document.querySelectorAll(".labelBox");
const emptyText = document.querySelectorAll(".empty__text");

// ** AGE LISTS ****
let ageYear = "";
let ageMonth = "";
let ageDate = "";

// ** CURRENT FULL DATE VARIABLES ************
const currentYear = new Date().getFullYear();
console.log(currentYear);
const currentMonth = new Date().getMonth();
console.log(currentMonth);
const currentDay = new Date().getDate();
console.log(currentDay);

// ** THIS FUNCTION IS CALLED WHEN THE USER INPUT AN INVALID DATE ****
const validDate = function () {
  for (let i = 0; i < emptyText.length; i++) {
    emptyText[0].textContent = "must be a valid date";
    emptyText[1].textContent = "";
    emptyText[2].textContent = "";
    emptyText[i].classList.remove("hidden");
  }
};

// ** THIS FUNCTION IS CALLED WHEN THE USER INPUT A VALID DATE VALUE AND MONTH VALUE. IT'S CALCULATE THE AGE IN MONTH AND YEAR
const ageCalc = function () {
  ageYear = currentYear - yearValue.value;
  ageMonth = currentMonth - monthValue.value;
  if (monthValue.value > currentMonth) {
    monthNum.textContent = `${currentMonth + (12 - monthValue.value)}`;
    yearNum.textContent = `${ageYear - 1}`;
  } else {
    monthNum.textContent = `${ageMonth}`;
    yearNum.textContent = `${ageYear}`;
  }
};

// ***** EVENT LISTENER **********
btn.addEventListener("click", function () {
  btn.style.backgroundColor = "black";
  if (
    dayValue.value === "" ||
    monthValue.value === "" ||
    yearValue.value === ""
  ) {
    // *** Display inputBoxH property in all inputBox
    for (let i = 0; i < inputBox.length; i++) {
      inputBox[i].classList.add("inputBoxH");
    }
    // *** Display labelBoxH property in all labelBox
    for (let i = 0; i < labelBox.length; i++) {
      labelBox[i].classList.add("labelBoxH");
    }
    // *** Remove hidden property in all emptyText
    for (let i = 0; i < emptyText.length; i++) {
      emptyText[i].classList.remove("hidden");
    }
  } else if (
    dayValue.value > 31 &&
    monthValue.value > 12 &&
    yearValue.value > currentYear
  ) {
    // *** Display inputBoxH property in all inputBox
    for (let i = 0; i < inputBox.length; i++) {
      inputBox[i].classList.add("inputBoxH");
    }
    // *** Display labelBoxH property in all labelBox
    for (let i = 0; i < labelBox.length; i++) {
      labelBox[i].classList.add("labelBoxH");
    }
    // *** Remove hidden property in all emptyText and change the text content of each emptyText
    for (let i = 0; i < emptyText.length; i++) {
      emptyText[0].textContent = "must be a valid day";
      emptyText[1].textContent = "must be a valid month";
      emptyText[2].textContent = "must be a valid year";
      emptyText[i].classList.remove("hidden");
    }
  } else {
    if (monthValue.value === 2 || 4 || 6 || 9 || 11) {
      if (dayValue.value >= 31) {
        validDate();
      } else {
        ageCalc();
        ageDate = `${currentDay + (30 - dayValue.value)}`;
        dayNum.textContent = `${ageDate}`;
      }
    } else if (monthValue.value === 1 || 3 || 5 || 7 || 8 || 10 || 12) {
      if (dayValue.value >= 32) {
        validDate();
      } else {
        ageCalc();
        ageDate = `${currentDay + (31 - dayValue.value)}`;
        dayNum.textContent = `${ageDate}`;
      }
    }
  }
});
