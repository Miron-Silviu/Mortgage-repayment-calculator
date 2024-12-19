'use strict';

// header variables
const clearButton = document.querySelector('.header__button');

// main variables
const mainForm = document.querySelector('.main__form');
let amount = document.querySelector('.amount__input');
const term = document.querySelector('.team__input');
const rate = document.querySelector('.input__interest__rate');

// Footer varibales
const repaymentDisplay = document.querySelector('.repayment__repay');
const totalRepaymentDisplay = document.querySelector('.total__repay');
const footerTitle = document.querySelector('.footer__title');
const footerImg = document.querySelector('footer__image');
const footerDescription = document.querySelector('.footer__description');
const footerCard = document.querySelector('.footer-card');
const footerContainer = document.querySelector('.footer-container');
const footerImgContainer = document.querySelector('.footer__img');
const resultContainer = document.querySelector('.result-container');
const footerInfoContainer = document.querySelector('.footer-info-container');

// Footer Card variables

const monthlyRepayment = document.querySelector('.monthly__info');
const totalInfo = document.querySelector('.total__info');

const monthlyInterest = document.querySelector('.mounthly__interest');
const totalInterest = document.querySelector('.total__interest');

// Radion Buttons First Class
const radioRepayment = document.querySelector('.main__repayment__input');
const radioInterest = document.querySelector('.main__interest__input');

const radioInterestOnly = document.querySelector('interest');
const radioRepaymentInput = document.querySelector('.repayment');

//   Radio buttons second class
let repaymentInput = document.querySelector('.repayment__input');
let interestInput = document.querySelector('.interest__input');

// Radio Buttons Labels
const labelRepayment = document.querySelector('.main__lable__repayment ');
const labelInterest = document.querySelector('.main__label__interest');

// Radio Buttons Id

const repaymentId = document.getElementById('repayment');

// Buttons
const mainButton = document.querySelector('.main__button');
const repaymentButton = document.querySelector('.radio__button__repayment');
const interestButton = document.querySelector('.radio__button__interest');

// First Variable function

// Main function
function mainFunction() {
  let amountInput = Number(amount.value);
  let termInput = Number(term.value);
  let rateInput = Number(rate.value);
  let convertInterest = rateInput / 100;
  // Calculate monthly payment
  let monthlyPayment = Math.trunc(
    (amountInput * (convertInterest / 12)) /
      (1 - (1 + convertInterest / 12) ** (-termInput * 12)) || 0
  );
  let resultMonthly = monthlyPayment.toLocaleString();

  // Calculate total payment
  let mortgageYears = Math.trunc(monthlyPayment * (termInput * 12));
  let totalRepayment = mortgageYears.toLocaleString();

  // Calculte inpute rate
  let interest = Math.trunc(mortgageYears - amountInput);
  let totalInterest = interest.toLocaleString();

  repaymentDisplay.textContent = '£' + resultMonthly;
  totalRepaymentDisplay.textContent = '£' + totalRepayment;

  // Show final result in the console
  console.log('Monthly Payment:', resultMonthly);
  console.log('Total Repayment:', totalRepayment);
  console.log('Total Interest:', totalInterest);

  // Show final results

  totalRepaymentDisplay.textContent = '£' + totalInterest;
  console.log(repaymentDisplay, totalRepaymentDisplay);
}
// Event listener form main button
mainButton.addEventListener('click', function (e) {
  e.preventDefault();
  mainFunction();
});

function repayment() {
  totalInfo.style.display = 'inline';
  monthlyRepayment.style.display = 'inline';
  monthlyInterest.style.display = 'none';
  totalInterest.style.display = 'none';
  footerCard.style.display = 'block';
  resultContainer.style.display = 'block';
  footerImgContainer.style.display = 'none';
  footerTitle.style.display = 'none';
  footerDescription.style.display = 'none';
}

function interest() {
  monthlyInterest.style.display = 'inline';
  totalInterest.style.display = 'inline';
  totalInfo.style.display = 'none';
  monthlyRepayment.style.display = 'none';
  footerCard.style.display = 'block';
  resultContainer.style.display = 'block';
  footerImgContainer.style.display = 'none';
  footerTitle.style.display = 'none';
  footerDescription.style.display = 'none';
}
// Repayment Input event
repaymentInput.addEventListener('click', function () {
  repayment();
});
interestInput.addEventListener('click', function () {
  interest();
});
// Event Listener for Header Button
clearButton.addEventListener('click', function () {
  // Update values to origianal stage
  amount.value = '';
  term.value = '';
  rate.value = '';
  repaymentDisplay.textContent = '£' + 0;
  totalRepaymentDisplay.textContent = '£' + 0;

  // Make result card invisible
  footerCard.style.display = 'none';
  resultContainer.style.display = 'none';
  footerImgContainer.style.display = 'block';
  footerTitle.style.display = 'block';
  footerDescription.style.display = 'block';
});
