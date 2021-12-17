import { Row } from "./Row.js";

export const Card = (data, body) => {
  const { title, description, director, producer, release_date } = data;
  const arr = [
    { Title: title },
    { Description: description },
    { Director: director },
    { Producer: producer },
    { "Release date": release_date },
  ];

  arr.forEach((el) => Row(el, body));
};
