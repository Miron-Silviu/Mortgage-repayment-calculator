'use strict';

// Selecting elements
const amount = document.querySelector('.amount__input');
const team = document.querySelector('.team__input');
const rate = document.querySelector('.input__interest__rate');

const clearButton = document.querySelector('.header__button');
const repayment = document.querySelector('.main__repayment__input');
const interest = document.querySelector('.main__interest__input');
const mainButton = document.querySelector('.main__button');

//  Creating main button event

mainButton.addEventListener('click', (e) => {
  const amountInput = Number(amount.value);
  const teamInput = Number(team.value);
  const rateInput = Number(rate.value);

  console.log(amountInput + teamInput + rateInput);
});
