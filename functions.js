export function randomNumberGenerator() {
  return Math.ceil(Math.random() * 100);
}

export function lesserThanChecker(firstvalue, secondValue, sign) {
  if (
    Number(firstvalue.innerHTML) < Number(secondValue.innerHTML) &&
    sign.innerHTML == "-"
  ) {
    firstvalue.innerHTML = Math.ceil(Math.random() * 100);
    secondValue.innerHTML = Math.ceil(Math.random() * 100);
  }
}
