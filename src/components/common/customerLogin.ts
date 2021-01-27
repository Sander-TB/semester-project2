const customerForm = document.querySelector("#customerLogin") as HTMLElement;
const firstName = document.querySelector("#firstName") as HTMLElement;
const firstNameError = document.querySelector("#firstNameError") as HTMLElement;
const lastName = document.querySelector("#lastName") as HTMLElement;
const lastNameError = document.querySelector("#lastNameError") as HTMLElement;
const email = document.querySelector("#email") as HTMLElement;
const emailError = document.querySelector("#emailError") as HTMLElement;
const password = document.querySelector("#password") as HTMLElement;
const passwordError = document.querySelector("#passwordError") as HTMLElement;



function validateForm() {
  event.preventDefault();

  if (checkLength(firstName.value, 1) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkLength(lastName.value, 3) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(password.value, 3) === true) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }
}

customerForm.addEventListener("submit", validateForm);

function checkLength(value : string, length : number) {
  if (value.trim().length > length) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email : string) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
