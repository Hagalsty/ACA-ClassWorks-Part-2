import { createNewUrl } from "./helpers/createNewUrl.helpers.js";
import { getData } from "./helpers/getData.helpers.js";
import { createNewRow } from "./helpers/createNewRow.helpers.js";

const searchInp = document.getElementById("searchInp");
const tbody = document.querySelector("tbody");
let timeout = null;

async function searchCountrys() {
  tbody.textContent = "Loading...";

  const url = createNewUrl(searchInp.value);

  const result = await getData(url);
  if (result.status) {
    tbody.textContent = "No such country";
    return;
  }

  tbody.textContent = "";
  result.forEach(({ name, currencies, capital, region }) =>
    createNewRow(name, currencies, capital, region, tbody)
  );

  console.log(result);
}

searchInp.addEventListener("input", function () {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  timeout = setTimeout(searchCountrys, 500);
});
