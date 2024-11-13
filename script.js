'use strict';

const amount = document.querySelector('.amount__input');
const team = document.querySelector('.team__input');
const rate = document.querySelector('.input__interest__rate');

const clearButton = document.querySelector('.header__button');
let repaymentDisplay = document.querySelector('.repayment__repay');
let totalRepaymentDisplay = document.querySelector('.total__repay');
const mainButton = document.querySelector('.main__button');
const mainForm = document.querySelector('.main__form');

// Footer varibales
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
  const amountInput = Number(amount.value);
  const teamInput = Number(team.value);
  const rateInput = Number(rate.value);

  // Convert interest rate
  const convertInterest = rateInput / 100;

  // Calculate monthly payment
  const monthlyPayment = Math.trunc(
    (amountInput * (convertInterest / 12)) /
      (1 - (1 + convertInterest / 12) ** (-teamInput * 12)) || 0
  );
  let resultMonthly = monthlyPayment.toLocaleString();

  // Calculate total payment
  const mortgageYears = Math.trunc(monthlyPayment * (teamInput * 12));
  const totalRepayment = mortgageYears.toLocaleString();

  // Calculte inpute rate
  const interest = Math.trunc(mortgageYears - amountInput);
  const totalInterest = interest.toLocaleString();

  // Show final result in the console
  console.log('Monthly Payment:', resultMonthly);
  console.log('Total Repayment:', totalRepayment);
  console.log('Total Interest:', totalInterest);

  // Show final results

  repaymentDisplay.textContent = '£' + resultMonthly;
  totalRepaymentDisplay.textContent = '£' + totalRepayment;

  console.log(repaymentDisplay, totalRepaymentDisplay);
});
