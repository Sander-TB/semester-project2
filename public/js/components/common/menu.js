import { getUserName } from "../../utils/storage.js";
import logout from "./logout.js";
export default function menu() {
    const container = document.querySelector(".nav__navigation");
    const username = getUserName();
    let authLink = `<a href="customer_login.html">
                    <i class="fas fa-user icon__user"></i>
                    <p class="uppercase">Log In</p>
                  </a>`;
    if (username) {
        authLink = `
    <a href="#">
    <i class="fas fa-user-lock"></i>
    <p class="uppercase" id="logout">Logout ${username}</p>
  </a>`;
    }
    container.innerHTML = `<div class="nav__navigation">
                          <ul class="nav__ul px-8">
                            <li class="nav__list-item cursor-pointer scale">
                              ${authLink}
                            </li>
                            <li class="nav__list-item cursor-pointer scale">
                              <a href="cart.html">
                                <i class="fas fa-shopping-bag icon__bag"></i>
                                <p class="uppercase">Bag</p>
                              </a>
                            </li>
                          </ul>
                        </div>`;
    logout();
}
