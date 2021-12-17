const decBtn = document.getElementById("decBtn");
const incBtn = document.getElementById("incBtn");
const resetBtn = document.getElementById("resetBtn");
const numberPlace = document.getElementById("numberPlace");
localStorage.setItem("counter", 0);
numberPlace.innerText = localStorage.getItem("counter");

function changeNum(n) {
  let currentNum = Number(localStorage.getItem("counter"));
  currentNum += n;
  if (currentNum < 0) return;
  numberPlace.innerText = currentNum;
  localStorage.setItem("counter", currentNum);
}

function setZero() {
  numberPlace.innerText = 0;
  localStorage.setItem("counter", 0);
}

incBtn.addEventListener("click", () => changeNum(1));
decBtn.addEventListener("click", () => changeNum(-1));
resetBtn.addEventListener("click", setZero);
