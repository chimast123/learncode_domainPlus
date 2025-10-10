import {
  randomNumberGenerator,
  randomSignGenerator,
  lesserThanChecker,
} from "./functions.js";

let firstvalue = document.querySelector(".firstValue");
let secondValue = document.querySelector(".secondValue");
let sign = document.querySelector(".sign");
let result = document.querySelector(".answer");
let answerField = document.querySelector(".input-area input");
let nextButton = document.querySelector(".input-area .next");
let checkButton = document.querySelector(".input-area .checkBut");
let answerMessage = document.querySelector(".answer-message");

let signs = ["+", "-", "*", "/"];

result.style.display = "none";

firstvalue.innerHTML = randomNumberGenerator();
secondValue.innerHTML = randomNumberGenerator();
sign.innerHTML = randomSignGenerator(signs);

lesserThanChecker(firstvalue, secondValue, sign);

nextButton.addEventListener("click", () => {
  result.style.display = "none";
  answerMessage.innerHTML = "";

  firstvalue.innerHTML = randomNumberGenerator();
  secondValue.innerHTML = randomNumberGenerator();
  sign.innerHTML = randomSignGenerator(signs);

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
      if (answerMessage.classList.contains("correct")) {
        answerMessage.classList.remove("correct");
      }
      answerMessage.classList.add("wrong");
      answerMessage.innerHTML =
        "Sorry you missed it, see the correct answer!⏬";
    } else {
      if (answerMessage.classList.contains("wrong")) {
        answerMessage.classList.remove("wrong");
      }
      answerMessage.classList.add("correct");
      answerMessage.innerHTML = "Sharp! That's the correct answer";
    }
  }
});
