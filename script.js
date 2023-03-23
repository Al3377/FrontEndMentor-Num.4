// select input elements and their corresponding card elements
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

// add event listener to update card name with name input value
nameInput.addEventListener("input", () => {
  cardName.textContent = nameInput.value;
});

// add event listener to validate number input and update card number
const allButNumber = /[^0-9\s]/g;
numberInput.addEventListener("input", () => {
  if (allButNumber.test(numberInput.value)) {
    // if input contains non-numeric and non-space characters, add error class to input and error message element
    numberInput.classList.add("error");
    numberError.classList.add("error-text");
  } else {
    // if input only contains numeric and space characters, update card number and remove error class from input and error message element
    cardNumber.textContent = numberInput.value;
    cardNumber.textContent = numberInput.value;
    numberInput.classList.remove("error");
    numberError.classList.remove("error-text");
  }
});

// add event listener to update card month with month input value
monthInput.addEventListener("input", () => {
  cardMonth.textContent = monthInput.value;
});

// add event listener to update card year with year input value
yearInput.addEventListener("input", () => {
  cardYear.textContent = yearInput.value;
});

// add event listener to update card CVC with CVC input value
cvcInput.addEventListener("input", () => {
  cardCvc.textContent = cvcInput.value;
});

// add event listener to format number input with spaces after every 4 characters
numberInput.addEventListener("input", (event) => {
  const value = event.target.value; // get the input value
  const formattedValue = value.replace(/\s/g, "").replace(/(.{4})/g, "$1 "); // format the value by adding space after every 4 characters
  event.target.value = formattedValue.trim(); // update the input value with the formatted value
});

// selecting button element
const button = document.getElementById("btn");

// adding event listener for button to
