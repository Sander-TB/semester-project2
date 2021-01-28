import menu from "./components/common/menu.js";
menu();
const cartRow = document.querySelectorAll(".in-cart__outer-box");
document.querySelectorAll("#remove").forEach((button) => {
    button.addEventListener("click", (event) => {
        const target = event.target;
        target.parentElement.parentElement.remove();
        UpdateCartTotal();
    });
});
function UpdateCartTotal() {
    console.log("updating total");
}
