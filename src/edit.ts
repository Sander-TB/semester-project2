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

const message = document.querySelector(".message") as HTMLInputElement;
const form = document.querySelector("form") as HTMLFormElement;
const title = document.querySelector("#title") as HTMLInputElement;
const brand = document.querySelector("#brand") as HTMLInputElement;
const price = document.querySelector("#price") as HTMLInputElement;
const description = document.querySelector("#description") as HTMLInputElement;
const rating = document.querySelector("#rating") as HTMLInputElement;
const imageUrl = document.querySelector("#imgUrl") as HTMLInputElement;
const idInput = document.querySelector("#id") as HTMLInputElement;

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

function submitForm(event : Event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim() as string;
  const brandValue = brand.value.trim() as string;
  const priceValue = parseFloat(price.value) as number;
  const descriptionValue = description.value as string;
  const imgUrlValue = imageUrl.value.trim() as string;
  const ratingValue = parseFloat(rating.value) as number;
  const idValue = idInput.value as string;

  if (
    titleValue.length === 0 ||
    brandValue.length === 0 ||
    priceValue === 0 ||
    descriptionValue.length === 0 ||
    imgUrlValue.length === 0 ||
    ratingValue === 0
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
  title : string,
  brand : string,
  price : number,
  description : string,
  image_url : string,
  rating : number,
  id : string
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
