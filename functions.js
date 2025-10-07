export function randomNumberGenerator() {
  let value = Math.ceil(Math.random() * 100);
  return value;
}

export function lesserThanChecker() {
  if (
    Number(firstvalue.innerHTML) < Number(secondValue.innerHTML) &&
    sign.innerHTML == "-"
  ) {
    firstvalue.innerHTML = generateNumber;
    secondValue.innerHTML = generateNumber;
  }
}