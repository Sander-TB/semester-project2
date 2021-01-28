import { clearStorage } from "../../utils/storage.js";

export default function logout() {
  const button = document.querySelector("#logout") as HTMLElement;

  if (button) {
    button.onclick = function () {
      const logOutUser = confirm("Are You Sure You Want To Log Out?");

      if (logOutUser) {
        clearStorage();
        location.href = "index.html";
      }
    };
  }
}
