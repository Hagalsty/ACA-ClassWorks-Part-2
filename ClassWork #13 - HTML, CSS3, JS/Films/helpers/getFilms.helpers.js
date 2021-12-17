import { BASE_URL } from "../constants/url.constants.js";
import { urlEntities } from "../constants/url.constants.js";

export async function getFilms() {
  const url = `${BASE_URL}/${urlEntities.films}`;

  const res = await fetch(url)
    .then((r) => r.json())
    .then((r) => r);
  return res;
}
