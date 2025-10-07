import { randomNumberGenerator, lesserThanChecker } from "./functions.js";

let firstvalue = document.querySelector(".firstValue");
let secondValue = document.querySelector(".secondValue");
let sign = document.querySelector(".sign");
let result = document.querySelector(".answer");
let answerField = document.querySelector(".input-area input");
let nextButton = document.querySelector(".input-area .next");
let checkButton = document.querySelector(".input-area .checkBut");
let answerMessage = document.querySelector(".answer-message");

let signs = ["+", "-", "*", "/"];

let generateNumber = randomNumberGenerator();

result.style.display = "none";

firstvalue.innerHTML = generateNumber;
secondValue.innerHTML = generateNumber;
sign.innerHTML = signs[Math.floor(Math.random() * signs.length)];

lesserThanChecker(firstvalue, secondValue, sign);

nextButton.addEventListener("click", () => {
  result.style.display = "none";
  answerMessage.innerHTML = "";
  firstvalue.innerHTML = generateNumber;
  secondValue.innerHTML = generateNumber;
  sign.innerHTML = signs[Math.floor(Math.random() * signs.length)];
  lesserThanChecker(firstvalue, secondValue, sign);
});

checkButton.addEventListener("click", () => {
  result.style.display = "block";
  if (answerField.value == "") {
    answerMessage.innerHTML = "Please enter a value";
    return;
  } else {
    let finalAnswer = eval(
      firstvalue.innerHTML + sign.innerHTML + secondValue.innerHTML
    );
    result.innerHTML = finalAnswer;
    if (answerField.value !== String(finalAnswer)) {
      answerMessage.classList.add("wrong");
      answerMessage.innerHTML =
        "Sorry you missed it, see the correct answer!⏬";
    } else {
      answerMessage.classList.add("correct");
      answerMessage.innerHTML = "Sharp! That's the correct answer";
    }
  }
});
