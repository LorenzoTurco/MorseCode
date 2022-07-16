import { translate } from "./translator.js";

const englishWord = document.querySelector("#eng-to-morse");
const morseWord = document.querySelector("#morse-to-eng");

const handleTranslate = (event) => {
  if (event.target.id == "eng-to-morse") {
    morseWord.innerText = translate(englishWord.innerText, "toMorse");
  }
  if (event.target.id == "morse-to-eng") {
    englishWord.innerText = translate(morseWord.innerText, "toEnglish");
  }
};

englishWord.addEventListener("input", handleTranslate);
morseWord.addEventListener("input", handleTranslate);
