import { months } from "../constants/months.js";

export function getDate() {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const day = newDate.getDate();
  const month = months[newDate.getMonth()];
  const date = `${day}/${month}/${year}`;

  return date;
}
