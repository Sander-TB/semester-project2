import displayMessage from "./components/common/displayMessage.js";
import { getToken } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js";
import menu from "./components/common/menu.js";

menu();

const form = document.querySelector("form") as HTMLFormElement;
const title = document.querySelector("#title") as HTMLInputElement;
const brand = document.querySelector("#brand") as HTMLInputElement;
const price = document.querySelector("#price") as HTMLInputElement;
const description = document.querySelector("#description") as HTMLInputElement;
const imgUrl = document.querySelector("#imgUrl") as HTMLInputElement;
const rating = document.querySelector("#rating") as HTMLInputElement;
const message = document.querySelector(".message") as HTMLInputElement;

const tableContent = document.querySelector(".table__display-content") as HTMLElement;

form.addEventListener("submit", submitForm);

function submitForm(event: Event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const brandValue = brand.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value;
  const imgUrlValue = imgUrl.value.trim();
  const ratingValue = parseFloat(rating.value);

  if (
    titleValue.length === 0 ||
    brandValue.length === 0 ||
    priceValue === 0 ||
    descriptionValue.length === 0 ||
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

  addProduct(
    titleValue,
    brandValue,
    priceValue,
    descriptionValue,
    imgUrlValue,
    ratingValue
  );
}

export async function addProduct(
  title : string,
  brand : string,
  price : number,
  description : string,
  image_url : string,
  rating :number
) {
  const url = baseUrl + "products";
  const data = JSON.stringify({
    title: title,
    brand: brand,
    price: price,
    description: description,
    image_url: image_url,
    rating: rating,
  });

  const token = getToken() as string;

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

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
  } catch (error) {
    console.log(error);
    displayMessage("error", "An Error Occurred", ".message");
  }
}
