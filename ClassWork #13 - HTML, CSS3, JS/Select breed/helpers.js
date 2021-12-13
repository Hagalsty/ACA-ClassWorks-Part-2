export async function getData(url) {
  const res = await fetch(url)
    .then((r) => r.json())
    .then((r) => r);
  return res;
}
