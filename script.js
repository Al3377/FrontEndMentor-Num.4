const nameInput = document.getElementById("name");
const cardName = document.getElementById("card-name");

const numberInput = document.getElementById("number");
const cardNumber = document.getElementById("card-number");
const numberError = document.getElementById("number-error");

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
  if (isNaN(numberInput.value)) {
    numberInput.classList.add("error");
    numberError.classList.add("error");
  } else {
    cardNumber.textContent = numberInput.value;
    numberInput.classList.remove("error");
    numberError.classList.remove("error");
  }
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

function addSpaces(element) {
  // Get the current value of the input field
  var value = element.value;

  // Remove all non-numeric characters
  value = value.replace(/\D/g, "");

  // Add a space after every 4 digits
  value = value.replace(/(\d{4})/g, "$1 ");

  // Update the value of the input field
  element.value = value;
}
