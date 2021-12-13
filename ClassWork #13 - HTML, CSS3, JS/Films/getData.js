const url = "https://ghibliapi.herokuapp.com/films/";

export async function getData() {
  const res = await fetch(url)
    .then((r) => r.json())
    .then((r) => r);
  return res;
}
