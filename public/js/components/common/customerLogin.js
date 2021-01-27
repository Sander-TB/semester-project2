"use strict";
const customerForm = document.querySelector("#customerLogin");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
function validateForm() {
    event.preventDefault();
    if (checkLength(firstName.value, 1) === true) {
        firstNameError.style.display = "none";
    }
    else {
        firstNameError.style.display = "block";
    }
    if (checkLength(lastName.value, 3) === true) {
        lastNameError.style.display = "none";
    }
    else {
        lastNameError.style.display = "block";
    }
    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
    if (checkLength(password.value, 3) === true) {
        passwordError.style.display = "none";
    }
    else {
        passwordError.style.display = "block";
    }
}
customerForm.addEventListener("submit", validateForm);
function checkLength(value, length) {
    if (value.trim().length > length) {
        return true;
    }
    else {
        return false;
    }
}
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
