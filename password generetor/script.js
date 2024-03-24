// "use strict";
// // Data
const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const special = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";

// Password
const passwordEl = document.querySelector(".password");

// Input Elements
const upperInput = document.getElementById("uppercase");
const lowerInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");

// Counter
const counterBtns = document.querySelectorAll(".generator__length-counter button");
const counterEl = document.querySelector(".generator__length-counter span");
const [decreaseBtn, increaseBtn] = counterBtns;

// Generate and Copy
const generateBtn = document.querySelector(".generate-btn");

// Functionality
let counter = 6;
let myPassword = "";

counterEl.textContent = counter;

// ----------------------------------------------------

increaseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  counter < 20 && counter++;
  counterEl.textContent = counter;
});

decreaseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  counter > 6 && counter--;
  counterEl.textContent = counter;
});

const getRandom = (() => {
  let all = [];

  if (upperInput.checked) {
    all.push(upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)])
  };
  if (lowerInput.checked) {
    all.push(lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)])
  };
  if (numbersInput.checked) {
    all.push(numbers[Math.floor(Math.random() * numbers.length)])
  };
  if (symbolsInput.checked) {
    all.push(special[Math.floor(Math.random() * special.length)])
  };
  if (all.length == 0) { return '' };

  return all[Math.floor(Math.random() * all.length)]
});

const getPass = (() => {
  myPassword = '';
  for (let i = 0; i < counter; i++) {
    myPassword = myPassword + getRandom();
  }
  passwordEl.textContent = myPassword;
});

generateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  getPass();
});


