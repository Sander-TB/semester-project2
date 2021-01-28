import { baseUrl } from "../../settings/api.js";
import { getToken } from "../../utils/storage.js";

export default function deleteProduct(id : number) {
  const deleteBtn = document.querySelector("#delete") as HTMLElement;

  deleteBtn.onclick = async function () {
    console.log(id);

    const confirmation = confirm(
      "Are You Sure You Want To Delete This Product?"
    );

    if (confirmation) {
      const url = baseUrl + "products/" + id;

      const token = getToken();

      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await fetch(url, options);
        const json = await response.json();

        location.href = "index.html";

        console.log(json);
      } catch (error) {
        console.log(error);
      }
    }
  };
}
