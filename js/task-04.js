const refs = {
  counterValue: document.getElementById("value"),

  btnOne: document.querySelector('button[data-action="decrement"]'),
  btnTwo: document.querySelector('button[data-action="increment"]'),
};
function calculationOne() {
  refs.counterValue.textContent --
}
function calculationTwo() {
  refs.counterValue.textContent++;
}

 refs.btnOne.addEventListener("click", calculationOne);
 refs.btnTwo.addEventListener("click", calculationTwo);

