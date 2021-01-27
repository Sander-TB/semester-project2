import displayMessage from "./displayMessage.js";
import { saveToken, saveUser } from "../../utils/storage.js";
import { baseUrl } from "../../settings/api.js";
import menu from "./menu.js"

const adminForm = document.querySelector("#adminLogin") as HTMLElement;
const email = document.querySelector("#email") as HTMLElement;
const emailError = document.querySelector("#emailError") as HTMLElement;
const password = document.querySelector("#password") as HTMLElement;
const passwordError = document.querySelector("#passwordError") as HTMLElement;
const message = document.querySelector(".message__container") as HTMLElement;

menu();

function validateForm(event: Event) {
  event.preventDefault();

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

adminForm.addEventListener("submit", validateForm);
adminForm.addEventListener("submit", submitForm);

function checkLength(value : string, length: number) {
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

function submitForm(event: Event) {
  event.preventDefault();

  message.innerHTML = "";

  const usernameValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length === 0 || passwordValue.length === 0) {
    displayMessage("warning", "Invalid Login Details", ".message__container");
  }

  login(usernameValue, passwordValue);
}

async function login(username : string, password : string) {
  const url = baseUrl + "auth/local";

  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.user) {
      saveToken(json.jwt);
      saveUser(json.user);

      location.href = "add_products.html";
    }

    if (json.error) {
      displayMessage("warning", "Invalid Login Details", ".message__container");
    }

    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
