export function createNewRow(
  { official: offName },
  curr,
  capital,
  region,
  body
) {
  const newRow = body.insertRow(-1);
  const nameCell = newRow.insertCell(0);
  const currCell = newRow.insertCell(1);
  const capitalCell = newRow.insertCell(2);
  const regionCell = newRow.insertCell(3);

  offName ? null : (offName = namesOfcountry.common);
  curr ? (curr = Object.keys(curr).join(", ")) : (curr = "Unknown");
  capital ? null : (capital = "Unknown");
  region ? null : (region = "Unknown");

  nameCell.innerText = offName;
  currCell.innerText = curr;
  capitalCell.innerText = capital;
  regionCell.innerText = region;

  newRow.addEventListener("click", function (e) {
    console.log(this);
    console.log(e.target.parentNode);
    window.location.href = `./aboutCountry.html?q=${offName}`;
  });

  return newRow;
}
