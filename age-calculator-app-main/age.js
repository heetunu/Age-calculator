function calc(e) {
  e.preventDefault();
  const dayInp = document.getElementById("day").value;
  const monthInp = document.getElementById("month").value;
  const yearInp = document.getElementById("year").value;

  const dayOtp = document.getElementById("DD");
  const monthOtp = document.getElementById("MM");
  const yearOtp = document.getElementById("YY");

  const form = document.querySelector("form");

  const birthDate = new Date(yearInp, monthInp - 1, dayInp);
  let todayDate = new Date();
  let year = todayDate.getFullYear() - birthDate.getFullYear();
  let month = todayDate.getMonth() - birthDate.getMonth()
  let days = todayDate.getDate() - birthDate.getDate()

  if (month < 0 || (month === 0 && days < 0)) {
    year--;
    month += 12;
  }

  if (days < 0) {
    const prevMonth = new Date(todayDate.getFullYear(), todayDate.getMonth(), 0).getDate();
    days += prevMonth;
    month--;
  }

  dayOtp.innerText = days
  monthOtp.innerText = month
  yearOtp.innerText = year
}

document.getElementById('calcForm').addEventListener("submit", calc);

