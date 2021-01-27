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
import { getUserName } from "./utils/storage.js";
const username = getUserName();
const productsUrl = baseUrl + "products";
menu();
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const container = document.querySelector(".products__container");
        try {
            const response = yield fetch(productsUrl);
            const json = yield response.json();
            container.innerHTML = "";
            json.forEach(function (product) {
                if (username) {
                    container.innerHTML += `
      <div class="products__one-product">
          <img class="products__image" src="${product.image_url}" alt="${product.title}">
          <h2 class="products__title uppercase">${product.title}</h2>
          <p class="products__price"> KR ${product.price} NOK</p>
          <button class="button button__small button__gray uppercase"> <a href="edit.html?id=${product.id}">Edit Product</a></button>
      </div>`;
                }
                else {
                    container.innerHTML += `
        <div class="products__one-product">
            <img class="products__image" src="${product.image_url}" alt="${product.title}">
            <h2 class="products__title uppercase">${product.title}</h2>
            <p class="products__price"> KR ${product.price} NOK</p>
            <button class="button button__small button__gray uppercase"> <a href="details.html?id=${product.id}">View Product</a></button>
        </div>`;
                }
            });
        }
        catch (error) {
            console.log(error);
            displayMessage("error", error, ".products__container");
        }
    });
})();
