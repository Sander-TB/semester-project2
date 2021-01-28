var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import menu from "./components/common/menu.js";
import { getToken } from "../src/utils/storage.js";
import deleteProduct from "./components/products/deleteProduct.js";
menu();
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
if (!id) {
    document.location.href = "index.html";
}
const productUrl = baseUrl + "products/" + id;
const message = document.querySelector(".message");
const form = document.querySelector("form");
const title = document.querySelector("#title");
const brand = document.querySelector("#brand");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const rating = document.querySelector("#rating");
const imageUrl = document.querySelector("#imgUrl");
const idInput = document.querySelector("#id");
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(productUrl);
            const details = yield response.json();
            title.value = details.title;
            brand.value = details.brand;
            price.value = details.price;
            description.value = details.description;
            rating.value = details.rating;
            imageUrl.value = details.image_url;
            idInput.value = details.id;
            deleteProduct(details.id);
        }
        catch (error) {
            console.log(error);
        }
    });
})();
form.addEventListener("submit", submitForm);
function submitForm(event) {
    event.preventDefault();
    message.innerHTML = "";
    const titleValue = title.value.trim();
    const brandValue = brand.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value;
    const imgUrlValue = imageUrl.value.trim();
    const ratingValue = parseFloat(rating.value);
    const idValue = idInput.value;
    if (titleValue.length === 0 ||
        brandValue.length === 0 ||
        priceValue === 0 ||
        descriptionValue.length === 0 ||
        imgUrlValue.length === 0 ||
        ratingValue === 0) {
        displayMessage("warning", "Please fill out all fields", ".message");
    }
    if (isNaN(priceValue) || isNaN(ratingValue)) {
        return displayMessage("warning", "The price and rating fields needs a number-input", ".message");
    }
    updateProduct(titleValue, brandValue, priceValue, descriptionValue, imgUrlValue, ratingValue, idValue);
}
function updateProduct(title, brand, price, description, image_url, rating, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = baseUrl + "products/" + id;
        const data = JSON.stringify({
            title: title,
            brand: brand,
            price: price,
            description: description,
            image_url: image_url,
            rating: rating,
            id: id,
        });
        const token = getToken();
        const options = {
            method: "PUT",
            body: data,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const response = yield fetch(url, options);
            const json = yield response.json();
            console.log(json);
            if (json.updated_at) {
                displayMessage("success", "Product Updated", ".message");
            }
            if (json.error) {
                displayMessage("error", "An Error Occurred", ".message");
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
