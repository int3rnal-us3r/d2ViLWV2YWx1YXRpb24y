/*
* Write a function that will take a date and compare with today date and return text:
* - Today: same year, same month, same date
* - Yesterday: same year, same month, date = today - 1
* - This week: same year, same month, today - 7 < date < today - 1
* - Last week: same year, same month, date = today - 7
* - This month: same year, same month, date < today - 7
* - Last month: same year, month = current month - 1
* - This year: same year
* - last year: year = current year - 1
* - Long time ago: everything else
*
* Lastly, please write a unit test for this function
* */

const calculateRelativeDate = (inputDate) => {
  return `TODO: Please see the above requirement`;
};

const View = {
  init: () => {
    document.getElementById('relative-date-btn').addEventListener('click', () => {
      const msgElement = document.getElementById('relative-date-msg');
      const inputDateElem = document.getElementById('relative-date-input');
      msgElement.textContent = calculateRelativeDate(inputDateElem.value);
    });
  }
};

document.addEventListener('DOMContentLoaded', View.init);
export {calculateRelativeDate};