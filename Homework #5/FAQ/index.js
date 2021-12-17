import { states } from "./states.js";
const questionAnswer = document.getElementById("questionAnswer");

function createQuestionsAndAnswers(pairs) {
  pairs.forEach((elem) => {
    const questionAnswerPair = document.createElement("div");
    questionAnswerPair.className = "questionAnswerPair";

    const question = document.createElement("div");
    question.className = "question";
    const questionP = document.createElement("p");
    questionP.innerText = elem.question;
    const buttonPart = document.createElement("div");
    buttonPart.className = "buttonPart";
    const divider = document.createElement("div");
    divider.className = "divider";
    const buttonImg = document.createElement("img");
    buttonImg.className = "buttonImg";
    buttonImg.src = "./assets/plus-sign.png";
    buttonImg.addEventListener("click", function () {
      const answer = this.parentNode.parentNode.parentNode.childNodes[1];
      if (this.src.includes("/assets/plus-sign.png")) {
        this.src = "./assets/minus-sign.png";
        answer.style.opacity = 1;
        answer.style.height = "auto";
        answer.style.margin = "18px 0";
      } else {
        this.src = "./assets/plus-sign.png";
        answer.style.opacity = 0;
        answer.style.height = 0;
        answer.style.margin = 0;
      }
    });

    buttonPart.append(divider, buttonImg);
    question.append(questionP, buttonPart);

    const answer = document.createElement("p");
    answer.className = "answer";
    answer.innerText = elem.answer;

    questionAnswerPair.append(question, answer);
    questionAnswer.append(questionAnswerPair);
  });
}

createQuestionsAndAnswers(states.questionsAswers);
