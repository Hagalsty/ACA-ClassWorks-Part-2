import { getData } from "./helpers/getData.helpers.js";
import { createNewUrl } from "./helpers/createNewUrl.helpers.js";
import { filterDataForDraw } from "./helpers/flterDataForDraw.helpers.js";
import { drawInfo } from "./helpers/drawInfo.helpers.js";

const container = document.querySelector("#infoContainer");

const countryName = window.location.search.slice(3).replaceAll("%20", " ");
const url = createNewUrl(countryName);
const data = await getData(url).then((allData) => allData[0]);
const filteredData = filterDataForDraw(data);

drawInfo(filteredData, container);
