import { checkArray } from "./helpers/arrayCheck.js";

const name = document.getElementById("name");
const age = document.getElementById("age");
const grade = document.getElementById("averageGrade");
const tbody = document.getElementsByTagName("tbody");
const ageTh = document.getElementById("ageTh");
let temp_state = [];
const states = {
  studentsInfo: [
    {
      name: "Taron",
      age: 21,
      grade: 80,
    },
    {
      name: "Gevorg",
      age: 24,
      grade: 70,
    },
    {
      name: "Hayk",
      age: 22,
      grade: 90,
    },
  ],
};

function render(items) {
  tbody[0].innerHTML = "";
  items.forEach(({ name, age, grade }) => {
    const trElement = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdAge = document.createElement("td");
    const tdGrade = document.createElement("td");

    tdName.innerText = name;
    tdName.className = "nameTd";
    tdAge.innerText = age;
    tdAge.className = "ageTd";
    tdGrade.innerText = grade;
    tdGrade.className = "gradeTd";

    trElement.append(tdName, tdAge, tdGrade);
    tbody[0].append(trElement);
  });
}

render(states.studentsInfo);

document.addEventListener("keypress", function (e) {
  if (e.key != "Enter") return;
  let tempCheck = false;
  const nameVal = name.value;
  const ageVal = age.value;
  const gradeVal = grade.value;

  if (!nameVal || !ageVal || !gradeVal) {
    alert("Missing input");
    return;
  }
  for (let i = 0; i < nameVal.length; i++) {
    if (
      !(nameVal[i] >= "a" && nameVal[i] <= "z") &&
      !(nameVal[i] >= "A" && nameVal[i] <= "Z")
    ) {
      alert("Wrong Name");
      return;
    }
  }
  if (!Number(ageVal)) {
    alert("Wrong Age");
    return;
  }
  if (!Number(gradeVal)) {
    alert("Wrong Average Grade");
    return;
  }

  name.value = "";
  age.value = "";
  grade.value = "";
  if (temp_state.length) {
    temp_state.push({
      name: nameVal,
      age: ageVal,
      grade: gradeVal,
    });
    render(temp_state);
    tempCheck = true;
  }
  states.studentsInfo.push({
    name: nameVal,
    age: ageVal,
    grade: gradeVal,
  });

  if (!tempCheck) render(states.studentsInfo);
});

ageTh.addEventListener("click", function () {
  const ages = document.getElementsByClassName("ageTd");
  const ageArr = [];

  for (let i = 0; i < ages.length; i++) {
    ageArr.push(ages[i].innerText);
  }

  const arrSort = checkArray(ageArr);
  if (arrSort == "Ascending") {
    temp_state = [...states.studentsInfo].sort(
      ({ age: a }, { age: b }) => b - a
    );
    render(temp_state);
  } else if (arrSort == "Descending") {
    render(states.studentsInfo);
  } else {
    temp_state = [...states.studentsInfo].sort(
      ({ age: a }, { age: b }) => a - b
    );
    render(temp_state);
  }
});
