import { translate } from "./translator.js";

const englishWord = document.querySelector(".eng-to-morse");
const morseWord = document.querySelector(".morse-to-eng");
const morseResultInput = document.querySelector(".morse-result");
const englishResultInput = document.querySelector(".english-result");

const handleTranslate = (event) => {
  if (event.target.className == "eng-to-morse") {
    morseResultInput.value = translate(englishWord.value, "toEnglish");
  }
  if (event.target.className == "morse-to-eng") {
    englishResultInput.value = translate(morseWord.value, "toMorse");
  }
};

englishWord.addEventListener("input", handleTranslate);
morseWord.addEventListener("input", handleTranslate);
