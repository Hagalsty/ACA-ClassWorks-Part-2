import { getFilms } from "./helpers/getFilms.helpers.js";
import { Card } from "./components/Card.js";
import { userMessages } from "./constants/messages.constants.js";

const filmInput = document.getElementById("filmInput");
const resaltDiv = document.getElementById("res");
const searchBtn = document.getElementById("searchBtn");

function creteList(nameOfFilm) {
  resaltDiv.textContent = "";
  const res = resaltOfFetch.filter(({ title }) => title == nameOfFilm);
  if (res.length === 0) {
    resaltDiv.innerText = userMessages.searchErrorMessage;
    return;
  }

  Card(res[0], resaltDiv);
}

searchBtn.addEventListener("click", () => {
  let { value } = filmInput;
  creteList(value);
});

const resaltOfFetch = await getFilms();
