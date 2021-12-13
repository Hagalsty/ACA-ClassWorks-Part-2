const colorInput = document.getElementById("color");
const backgroundInput = document.getElementById("background");
const applyBtn = document.getElementById("applyChanges");
const pElements = document.getElementsByTagName("p");

applyBtn.addEventListener("click", function () {
  const color = colorInput.value;
  const bgColor = backgroundInput.value;
  const colorLen = color.length;
  const bgColorLen = bgColor.length;

  if (
    color &&
    color[0] == "#" &&
    (colorLen == 4 || colorLen == 7 || colorLen == 9)
  ) {
    for (let i = 1; i < colorLen; i++) {
      console.log(color);
      if (
        !(color[i] >= 0 && color[i] <= 9) &&
        !(color[i] >= "a" && color[i] <= "f")
      ) {
        alert("Wrong Color Input");
        return;
      }
    }
    for (let i = 0; i < pElements.length; i++) {
      pElements[i].style.color = color;
    }
  }
  if (
    bgColor &&
    bgColor[0] == "#" &&
    (bgColorLen == 4 || bgColorLen == 7 || bgColorLen == 9)
  ) {
    for (let i = 1; i < bgColorLen; i++) {
      console.log(bgColor);
      if (
        !(bgColor[i] >= 0 && bgColor[i] <= 9) &&
        !(bgColor[i] >= "a" && bgColor[i] <= "f")
      ) {
        alert("Wrong Background Color Input");
        return;
      }
    }
    for (let i = 0; i < pElements.length; i++) {
      pElements[i].style.backgroundColor = bgColor;
    }
  }
});
