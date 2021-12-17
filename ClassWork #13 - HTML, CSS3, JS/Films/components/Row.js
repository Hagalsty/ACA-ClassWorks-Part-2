export const Row = (el, body) => {
  const div = document.createElement("div");
  div.className = "section";
  const innerDiv1 = document.createElement("div");
  innerDiv1.innerText = Object.keys(el)[0] + ": ";
  innerDiv1.className = "sectionFirstChild";
  const innerDiv2 = document.createElement("div");
  innerDiv2.innerText = Object.values(el)[0];
  div.append(innerDiv1, innerDiv2);
  body.append(div);
};
