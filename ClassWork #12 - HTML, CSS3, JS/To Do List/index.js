const addBtn = document.getElementById("addBtn");
const toDoInput = document.getElementById("toDoInput");
const toDos = document.getElementById("toDos");
let numberForUniqueId = 0;
const state = [];

const toDoCreate = () => {
  const div = document.createElement("div");
  const span = document.createElement("span");
  const buttonsContainer = document.createElement("div");
  const rmBtn = document.createElement("button");
  const doneBtn = document.createElement("button");
  const allSpans = document.querySelectorAll(".showenInList");
  const lastSpan = allSpans[allSpans.length - 1];

  if (!toDoInput.value.trim()) {
    toDoInput.value = "";
    alert("Wrong input");
    return;
  }

  numberForUniqueId++;
  div.className = "labelContainer";
  rmBtn.innerText = "Remove";
  rmBtn.className = "rmListButton listButton";
  rmBtn.id = "rmBtn" + numberForUniqueId;
  doneBtn.innerText = "Done";
  doneBtn.className = "doneListButton listButton";
  doneBtn.id = "doneBtn" + numberForUniqueId;

  if (lastSpan != undefined)
    span.innerText = `${parseInt(lastSpan.innerText[0]) + 1}. ${
      toDoInput.value
    }`;
  else span.innerText = `1. ${toDoInput.value}`;

  span.className = "showenInList";
  span.id = "span" + numberForUniqueId;
  toDoInput.value = "";

  rmBtn.addEventListener("click", function () {
    this.parentNode.parentNode.remove();
  });

  doneBtn.addEventListener("click", function () {
    const butonSecondParrent = this.parentNode.parentNode;
    const toDos = butonSecondParrent.parentNode;
    let id;

    if (butonSecondParrent.previousSibling.nodeName == "#text") {
      id = toDos.children[1].firstChild.id;
    } else {
      const prevSpanId = butonSecondParrent.previousSibling.childNodes[0].id;
      const prevSibl = document.getElementById(prevSpanId);
      if (prevSibl.style.textDecoration != "line-through") {
        return;
      }
      id = this.parentNode.previousSibling.id;
    }
    const textNode = document.getElementById(id);
    textNode.style.textDecoration = "line-through";
  });

  buttonsContainer.append(doneBtn, rmBtn);
  div.append(span, buttonsContainer);
  toDos.append(div);
};

addBtn.addEventListener("click", toDoCreate);
toDoInput.addEventListener("keyup", function (e) {
  if (e.key == "Enter") toDoCreate();
});
