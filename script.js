const nameInput = document.getElementById("name");
const cardName = document.getElementById("card-name");

const numberInput = document.getElementById("number");
const cardNumber = document.getElementById("card-number");

const monthInput = document.getElementById("date-month");
const cardMonth = document.getElementById("card-month");

const yearInput = document.getElementById("date-year");
const cardYear = document.getElementById("card-year");

const cvcInput = document.getElementById("cvc");
const cardCvc = document.getElementById("card-cvc");

nameInput.addEventListener("input", () => {
  cardName.textContent = nameInput.value;
});

numberInput.addEventListener("input", () => {
  cardNumber.textContent = numberInput.value;
});
monthInput.addEventListener("input", () => {
  cardMonth.textContent = monthInput.value;
});

yearInput.addEventListener("input", () => {
  cardYear.textContent = yearInput.value;
});

cvcInput.addEventListener("input", () => {
  cardCvc.textContent = cvcInput.value;
});
