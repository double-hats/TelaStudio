let calculation = localStorage.getItem('calculation') || '0';
let firstDisplay = document.querySelector('.calculation-input');
firstDisplay.innerHTML = calculation;
/*if (calculation === undefined) {
  calculation = '';
}*/

const addToCalculation = (operator) => {
  if (calculation === '0') {
    calculation = '';
    calculation += operator;
  }else {
    calculation += operator;
  }
  document.querySelector('.calculation-input').innerHTML = calculation;
  localStorage.setItem('calculation', calculation);
}