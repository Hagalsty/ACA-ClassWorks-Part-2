export function filterDataForDraw(data) {
  const res = {};

  for (let i of Object.keys(data)) {
    if (
      i === "name" ||
      i === "independent" ||
      i === "currencies" ||
      i === "capital" ||
      i === "region" ||
      i === "languages" ||
      i === "area" ||
      i === "borders" ||
      i === "population" ||
      i === "timezones" ||
      i === "continents" ||
      i === "flags" ||
      i === "coatOfArms"
    ) {
      res[i] = data[i];
    }
  }

  return res;
}
