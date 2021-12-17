export function drawInfo(data, body) {
  for (let key of Object.keys(data)) {
    const div = document.createElement("div");
    const dataName = document.createElement("span");
    const dataValue = document.createElement("span");

    div.className = "subContainers";

    if (key === "name") {
      dataValue.innerText = JSON.stringify(data[key])
        .replaceAll(",", "\n")
        .replaceAll("{", " ")
        .replaceAll("}", " ")
        .replaceAll('"', " ");
    } else if (key === "currencies") {
      dataValue.innerText = Object.keys(data[key]).join(", ");
    } else if (key === "languages") {
      dataValue.innerText = Object.values(data[key]).join(", ");
    } else if (key === "borders") {
      dataValue.innerText = data[key].join(", ");
    } else {
      dataValue.innerText = data[key];
    }

    dataName.innerText = `${key}: \n`;
    dataName.style.color = "red";

    if (key === "flags" || key === "coatOfArms") {
      if (!data[key].hasOwnProperty("png")) continue;
      const img = document.createElement("img");
      img.src = data[key].png;
      img.style.width = "300px";
      div.append(dataName, img);
    } else div.append(dataName, dataValue);

    body.append(div);
  }
}
