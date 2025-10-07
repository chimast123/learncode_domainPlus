let firstvalue = document.querySelector(".firstValue");
let secondValue = document.querySelector(".secondValue");
let sign = document.querySelector(".sign");
let result = document.querySelector(".answer");
let answerField = document.querySelector(".input-area input");
let nextButton = document.querySelector(".input-area .next");
let checkButton = document.querySelector(".input-area .checkBut");

let signs = ["+", "-", "*", "/"];

function randomNumberGenerator() {
  let value = Math.ceil(Math.random() * 100);
  return value;
}

let generateNumber = randomNumberGenerator();

result.style.display = "none";

firstvalue.innerHTML = generateNumber;
secondValue.innerHTML = generateNumber;
sign.innerHTML = signs[Math.floor(Math.random() * signs.length)];

function lesserThanChecker() {
  if (
    Number(firstvalue.innerHTML) < Number(secondValue.innerHTML) &&
    sign.innerHTML == "-"
  ) {
    firstvalue.innerHTML = generateNumber;
    secondValue.innerHTML = generateNumber;
  }
}
lesserThanChecker();

nextButton.addEventListener("click", () => {
  result.style.display = "none";
  firstvalue.innerHTML = generateNumber;
  secondValue.innerHTML = generateNumber;
  sign.innerHTML = signs[Math.floor(Math.random() * signs.length)];
  lesserThanChecker;
});

checkButton.addEventListener("click", () => {
  result.style.display = "block";
  if (answerField.value == "") {
    alert("Please enter a value");
    return;
  } else {
    let finalAnswer = eval(
      firstvalue.innerHTML + sign.innerHTML + secondValue.innerHTML
    );
    result.innerHTML = finalAnswer;
    if (answerField.value !== String(finalAnswer)) {
      alert("Wrong answer, view correct answer below!😉");
    } else {
      alert("Correct answer, well done!");
    }
  }
});
