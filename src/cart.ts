import menu from "./components/common/menu.js";
import { addToCart } from "./components/products/addToCart.js";

menu();

const cartRow = document.querySelectorAll(".in-cart__outer-box");

document.querySelectorAll("#remove").forEach((button) => {
  button.addEventListener("click", (event: Event) => {
    const target = event.target as HTMLButtonElement;
    ((target.parentElement as HTMLElement).parentElement as HTMLElement).remove();
    UpdateCartTotal();
  });
});

function UpdateCartTotal() {
  console.log("updating total");
}
