'use strict';

// Selecting elements
const amount = document.querySelector('.amount__input');
const team = document.querySelector('.team__input');
const rate = document.querySelector('.input__interest__rate');

const clearButton = document.querySelector('.header__button');
const repayment = document.querySelector('.main__repayment__input');
const interest = document.querySelector('.main__interest__input');
const mainButton = document.querySelector('.main__button');

// Radio buttons

//  Creating main button event

mainButton.addEventListener('click', (e) => {
  const amountInput = Number(amount.value);
  const teamInput = Number(team.value);
  const rateInput = Number(rate.value);

  // Convert interest rate
  const convertInterest = rateInput / 100;

  // Mounthly Payments
  const monthlyPayment = Math.trunc(
    (amountInput * (convertInterest / 12)) /
      (1 - (1 + convertInterest / 12) ** (-teamInput * 12))
  );
  const resultMonthly = monthlyPayment.toLocaleString();
  console.log(resultMonthly);

  // Repayment
  const mortgageYears = Math.trunc(monthlyPayment * (teamInput * 12));
  const totalRepayment = mortgageYears.toLocaleString();
  console.log(totalRepayment);

  // Interest Rate Only
  const interest = Math.trunc(mortgageYears - amountInput);
  const totalInterest = interest.toLocaleString();
  console.log(totalInterest);
});

// radion buttons

repayment.addEventListener('click', function () {
  if (monthlyPayment > 0) return;
  else 3;
  console.log('Print the result in the console. ');
});
