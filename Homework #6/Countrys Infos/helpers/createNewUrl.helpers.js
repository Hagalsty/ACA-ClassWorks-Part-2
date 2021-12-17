import { BASE_URl } from "../constants/url.constants.js";

export function createNewUrl(country) {
  let newUrl;

  if (country) newUrl = `${BASE_URl}/name/${country}`;
  else newUrl = `${BASE_URl}/all`;

  return newUrl;
}
