'use strict';
// header variables
const clearButton = document.querySelector('.header__button');

// main variables
const mainButton = document.querySelector('.main__button');
const mainForm = document.querySelector('.main__form');
const amount = document.querySelector('.amount__input');
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

// Radion Buttons
const radioRepayment = document.querySelector('.main__repayment__input');
const radioInterest = document.querySelector('.main__interest__input');

// Event listener form main button
mainButton.addEventListener('click', function (e) {
  e.preventDefault();
  let amountInput = Number(amount.value);
  let termInput = Number(term.value);
  let rateInput = Number(rate.value);

  // Convert interest rate
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

  // Show final result in the console
  console.log('Monthly Payment:', resultMonthly);
  console.log('Total Repayment:', totalRepayment);
  console.log('Total Interest:', totalInterest);

  // Show final results

  repaymentDisplay.textContent = '£' + resultMonthly;
  totalRepaymentDisplay.textContent = '£' + totalRepayment;

  console.log(repaymentDisplay, totalRepaymentDisplay);
});

// Event Listener for Header Button
clearButton.addEventListener('click', function () {
  amount.value = '';
  term.value = '';
  rate.value = '';
  repaymentDisplay.textContent = '£' + 0;
  totalRepaymentDisplay.textContent = '£' + 0;
});
