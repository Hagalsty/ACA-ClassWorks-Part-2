import { getData } from "./getData.js";

const filmInput = document.getElementById("filmInput");
const resaltDiv = document.getElementById("res");
const searchBtn = document.getElementById("searchBtn");

function creteList(nameOfFilm) {
  resaltDiv.textContent = "";
  const res = resaltOfFatch.filter((el) => el.title == nameOfFilm)[0];
  if (res.length == 0) resaltDiv.innerText = "Wrong input";
  const {
    title,
    description,
    director,
    producer,
    release_date: releaseDate,
  } = res;
  const arr = [
    { Title: title },
    { Description: description },
    { Director: director },
    { Producer: producer },
    { "Release date": releaseDate },
  ];

  arr.forEach((el) => {
    const div = document.createElement("div");
    div.className = "section";
    const innerDiv1 = document.createElement("div");
    innerDiv1.innerText = Object.keys(el)[0] + ": ";
    innerDiv1.className = "sectionFirstChild";
    const innerDiv2 = document.createElement("div");
    innerDiv2.innerText = Object.values(el)[0];
    div.append(innerDiv1, innerDiv2);
    resaltDiv.append(div);
  });
}

searchBtn.addEventListener("click", function () {
  let title = filmInput.value;
  creteList(title);
});

const resaltOfFatch = await getData();
