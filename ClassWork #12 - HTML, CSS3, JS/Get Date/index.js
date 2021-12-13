import { getDate } from "./helpers/getDate.js";

const buttonForDate = document.getElementById("buttonForDate");
const dateWrapper = document.querySelector(".placeForNewDate");

buttonForDate.addEventListener("click", function () {
  dateWrapper.classList.toggle("placeForNewDate");
  dateWrapper.innerText = getDate();
});
