var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import displayMessage from "./displayMessage.js";
import { saveToken, saveUser } from "../../utils/storage.js";
import { baseUrl } from "../../settings/api.js";
import menu from "./menu.js";
const adminForm = document.querySelector("#adminLogin");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const message = document.querySelector(".message__container");
menu();
function validateForm(event) {
    event.preventDefault();
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
adminForm.addEventListener("submit", validateForm);
adminForm.addEventListener("submit", submitForm);
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
function submitForm(event) {
    event.preventDefault();
    message.innerHTML = "";
    const usernameValue = email.value.trim();
    const passwordValue = password.value.trim();
    if (usernameValue.length === 0 || passwordValue.length === 0) {
        displayMessage("warning", "Invalid Login Details", ".message__container");
    }
    login(usernameValue, passwordValue);
}
function login(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
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
            const response = yield fetch(url, options);
            const json = yield response.json();
            if (json.user) {
                saveToken(json.jwt);
                saveUser(json.user);
                location.href = "add_products.html";
            }
            if (json.error) {
                displayMessage("warning", "Invalid Login Details", ".message__container");
            }
            console.log(json);
        }
        catch (error) {
            console.log(error);
        }
    });
}
