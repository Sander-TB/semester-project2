// import { baseUrl } from "../../settings/api.js";
// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");
// const url = baseUrl + "products/" + id;
export function addToCart() {
    let addToCartButtons = document.querySelectorAll("#addToCart");
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener("click", () => {
            cartItems();
        });
    }
    function cartItems() {
        let itemNumbers = localStorage.getItem("item");
        const parsed = parseInt(itemNumbers);
        if (parsed) {
            localStorage.setItem("item", itemNumbers + 1);
        }
        else {
            localStorage.setItem("item", 1);
        }
    }
}
