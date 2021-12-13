const inputForCopy = document.getElementById("inputForCopy");
const placeForCopy = document.getElementById("placeForCopy");

inputForCopy.addEventListener("keyup", function () {
  placeForCopy.innerText = inputForCopy.value;
});

inputForCopy.addEventListener("keydown", function () {
  placeForCopy.innerText = inputForCopy.value;
});
