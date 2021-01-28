import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import menu from "./components/common/menu.js";
import { addToCart } from "./components/products/addToCart.js";

menu();

//GET QUERYSTRING PARAMETERS
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const productsUrl = baseUrl + "details/" + id;

// if (!id) {
//   document.location.href = "index.html";
// }

(async function () {
  try {
    const response = await fetch(productsUrl);

    const details = await response.json();

    document.title = details.title;

    const container = document.querySelector(".details-container") as HTMLDivElement;

    container.innerHTML = `
  <div class="details__image">
    <img src="${details.image_url}" alt="product">
  </div>

  <div class="details__text">
    <h1 class="details__text-heading tracking-widest uppercase">${details.title}</h1>
    <p class="details__text-subheading">${details.brand}</p>
  <div class="details__rating-cartbtn-container">
    <div class="rating">
      <div class="rating-stars">
        <i class="fas fa-star star-yellow"></i>
        <i class="fas fa-star star-yellow"></i>
        <i class="fas fa-star star-yellow"></i>
        <i class="fas fa-star star-yellow"></i>
        <i class="fas fa-star-half star-yellow"></i>
      </div>
      <p class="rating-text"> <a href="#reviews">3 Reviews</a></p>
    </div>

    <div class="add-to-cart">
      <p class="add-to-cart-price uppercase">KR ${details.price} NOK</p>
      <div class="add-to-cart-buttons">
        <input type="number" class="quantity-input">
          <button class="button button__medium button__black uppercase" id="addToCart">Add To Cart</button>
        </div>
      </div>

    </div>

    <div class="details__description">
      <h3 class="details__description-heading uppercase">Description</h3>
      <p>${details.description}</p>
    </div>
  </div>`;

    const addToCartBtn = document.querySelector("#addToCart") as HTMLButtonElement;
    addToCartBtn.addEventListener("click", addToCart);
  } catch (error) {
    displayMessage("error", error, ".details-container");
  }
})();
