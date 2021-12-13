const next = document.getElementById("next");
const prev = document.getElementById("prev");
const slidesContainer = document.getElementById("slidesContainer");
let slideIndex = 1;
let uniqueId;

function nextSlide() {
  slideIndex += 1;
  clearInterval(uniqueId);
  uniqueId = setInterval(nextSlide, 2000);
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex -= 1;
  showSlide(slideIndex);
}

function showSlide(num) {
  const slides = document.getElementsByClassName("slides");

  if (num > slides.length) slideIndex = 1;
  if (num < 1) slideIndex = slides.length;
  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";

  slides[slideIndex - 1].style.display = "block";
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

function callbackForInterval() {
  uniqueId = setInterval(nextSlide, 2000);
}
setTimeout(callbackForInterval, 1000);
