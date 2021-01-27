import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import menu from "./components/common/menu.js";
import { getUserName } from "./utils/storage.js";

const username = getUserName();

const productsUrl = baseUrl + "products";

menu();

(async function () {
  const container = document.querySelector(".products__container");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

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
      } else {
        container.innerHTML += `
        <div class="products__one-product">
            <img class="products__image" src="${product.image_url}" alt="${product.title}">
            <h2 class="products__title uppercase">${product.title}</h2>
            <p class="products__price"> KR ${product.price} NOK</p>
            <button class="button button__small button__gray uppercase"> <a href="details.html?id=${product.id}">View Product</a></button>
        </div>`;
      }
    });
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".products__container");
  }
})();
