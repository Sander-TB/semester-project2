import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import menu from "./components/common/menu.js";
import { getToken } from "../js/utils/storage.js";
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

(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();

    title.value = details.title;
    brand.value = details.brand;
    price.value = details.price;
    description.value = details.description;
    rating.value = details.rating;
    imageUrl.value = details.image_url;
    idInput.value = details.id;

    deleteProduct(details.id);
  } catch (error) {
    console.log(error);
  }
})();

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
  const idValue = idInput.value;

  if (
    titleValue.length === 0 ||
    brandValue.length === 0 ||
    priceValue.length === 0 ||
    descriptionValue.length === 0 ||
    imgUrlValue.length === 0 ||
    ratingValue.length === 0
  ) {
    displayMessage("warning", "Please fill out all fields", ".message");
  }

  if (isNaN(priceValue) || isNaN(ratingValue)) {
    return displayMessage(
      "warning",
      "The price and rating fields needs a number-input",
      ".message"
    );
  }

  updateProduct(
    titleValue,
    brandValue,
    priceValue,
    descriptionValue,
    imgUrlValue,
    ratingValue,
    idValue
  );
}

async function updateProduct(
  title,
  brand,
  price,
  description,
  image_url,
  rating,
  id
) {
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
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);

    if (json.updated_at) {
      displayMessage("success", "Product Updated", ".message");
    }

    if (json.error) {
      displayMessage("error", "An Error Occurred", ".message");
    }
  } catch (error) {
    console.log(error);
  }
}
