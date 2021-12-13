import { getData } from "./helpers.js";

const breedSelector = document.getElementById("breedSelector");
const imgForDogs = document.querySelector("img");

breedSelector.addEventListener("change", async function (event) {
  const { value: urlPart } = event.target;
  const url = `https://dog.ceo/api/breed/${urlPart}/images/random`;
  const res = await getData(url);
  console.log(res);
  imgForDogs.classList = "imgForDogs";
  imgForDogs.src = res.message;
  imgForDogs.style.width = "500px";
});
