const searchBtn = document.getElementById("searchBtn");
const bookName = document.getElementById("bookName");
const tbody = document.getElementsByTagName("tbody");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
let pageIndex = 1;
let urlPart;

async function getData(name) {
  urlPart = "http://openlibrary.org/search.json?q=" + name;
  const res = await fetch("http://openlibrary.org/search.json?q=" + name)
    .then((r) => r.json())
    .then((r) => r);
  return res;
}

async function getPage(pageNum) {
  const res = await fetch(urlPart + "&page=" + pageNum)
    .then((r) => r.json())
    .then((r) => r);
  return res;
}

function createList(arr) {
  tbody[0].textContent = "";
  arr.forEach(
    ({
      title,
      author_name: author = "Unknown",
      first_publish_year: publised = "Unknown",
      subject = "Unknown",
    }) => {
      const subjects = subject === "Unknown" ? "Unknown" : subject.slice(0, 5);

      const row = document.createElement("tr");
      const titleTd = document.createElement("td");
      titleTd.innerText = title;
      const authorTd = document.createElement("td");
      authorTd.innerText = author;
      const publishedTd = document.createElement("td");
      publishedTd.innerText = publised;
      const subjectTd = document.createElement("td");
      subjectTd.innerText = subjects;
      row.append(titleTd, authorTd, publishedTd, subjectTd);
      tbody[0].append(row);
    }
  );
}

function createPagination(currentPage) {
  nextButton.addEventListener("click", async function () {
    const reqPage = ++pageIndex;
    const page = await getPage(reqPage);
    createList(page.docs);
    console.log(page);
  });
  nextButton.addEventListener("click", async function () {
    if (pageIndex == 1) return;
    const reqPage = --pageIndex;
    const page = await getPage(reqPage);
    createList(page.docs);
    console.log(page);
  });
}

searchBtn.addEventListener("click", async function () {
  const name = bookName.value.replaceAll(" ", "+");
  const res = await getData(name);
  const pages = Math.ceil(res.numFound / 100);
  createList(res.docs);
  pageIndex = 1;
  createPagination(pageIndex);
  console.log(res);
});
