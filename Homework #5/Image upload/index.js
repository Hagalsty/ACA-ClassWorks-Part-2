const fileInp = document.getElementById("fileInp");
const img = document.querySelector("img");
const uploadBtn = document.getElementById("uploadBtn");

uploadBtn.addEventListener("click", function (event) {
  img.src = URL.createObjectURL(fileInp.files[0]);
});
