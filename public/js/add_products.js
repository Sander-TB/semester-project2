var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import displayMessage from "./components/common/displayMessage.js";
import { getToken } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js";
import menu from "./components/common/menu.js";
menu();
const form = document.querySelector("form");
const title = document.querySelector("#title");
const brand = document.querySelector("#brand");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const imgUrl = document.querySelector("#imgUrl");
const rating = document.querySelector("#rating");
const message = document.querySelector(".message");
const tableContent = document.querySelector(".table__display-content");
form.addEventListener("submit", submitForm);
function submitForm(event) {
    event.preventDefault();
    message.innerHTML = "";
    const titleValue = title.value.trim();
    const brandValue = brand.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value;
    const imgUrlValue = imgUrl.value.trim();
    const ratingValue = parseFloat(rating.value);
    if (titleValue.length === 0 ||
        brandValue.length === 0 ||
        priceValue === 0 ||
        descriptionValue.length === 0 ||
        ratingValue === 0) {
        displayMessage("warning", "Please fill out all fields", ".message");
    }
    if (isNaN(priceValue) || isNaN(ratingValue)) {
        return displayMessage("warning", "The price and rating fields needs a number-input", ".message");
    }
    addProduct(titleValue, brandValue, priceValue, descriptionValue, imgUrlValue, ratingValue);
}
export function addProduct(title, brand, price, description, image_url, rating) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = baseUrl + "products";
        const data = JSON.stringify({
            title: title,
            brand: brand,
            price: price,
            description: description,
            image_url: image_url,
            rating: rating,
        });
        const token = getToken();
        const options = {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const response = yield fetch(url, options);
            const json = yield response.json();
            if (json.created_at) {
                displayMessage("success", "Product Created", ".message");
                form.reset();
            }
            if (json.error) {
                displayMessage("error", json.message, ".message");
            }
            function appendProduct() {
                tableContent.innerHTML = "";
                tableContent.innerHTML += `
      ${json.title}
      `;
            }
            appendProduct();
        }
        catch (error) {
            console.log(error);
            displayMessage("error", "An Error Occurred", ".message");
        }
    });
}
