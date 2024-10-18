'use strict';

// Selecting elements

let clearButton = document.querySelector('.header__button');
let amount = document.querySelector('.amount__input').value;
let team = document.querySelector('.team__input').value;
let rate = document.querySelector('.input__interest__rate').value;
let repayment = document.querySelector('.main__repayment__input');
let interest = document.querySelector('.main__interest__input');
let mainButton = document.querySelector('.main__button');

//  Create funcionalty for amount input
let amountInput;

function mortgageAmount(a) {
  for (let i = 0; i > amount.length; i++) {
    amountInput.push([i]);
  }
  return amountInput;
}
//  Creating main button event

mainButton.addEventListener('click', (e) => {
  console.log(amount);
});
