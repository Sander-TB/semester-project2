import menu from "./components/common/menu.js";
menu();
const cartRow = document.querySelectorAll(".in-cart__outer-box");
document.querySelectorAll("#remove").forEach((button) => {
    button.addEventListener("click", (event) => {
        console.log("removing");
        const removed = event.target;
        removed.parentElement.parentElement.remove();
        UpdateCartTotal();
    });
});
function UpdateCartTotal() {
    console.log("updating total");
}
// function checkout() {}
