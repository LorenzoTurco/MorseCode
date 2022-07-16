const morseDictionary = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  " ": "/",
};

const englishDictionary = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "/": "  ",
};

export const translate = (word, language) => {
  let morseResult = "";
  let englishResult = "";

  word = word.toLowerCase();

  if (language == "toMorse") {
    for (let i = 0; i < word.length; i++) {
      console.log(word[i]);
      if (!morseDictionary[word[i].toLowerCase()]) {
        englishResult += "#";
      } else {
        englishResult += `${morseDictionary[word[i]]} `;
      }
    }
    return englishResult;
  } else if (language == "toEnglish") {
    const morseArr = word.split(" ");
    for (let i = 0; i < morseArr.length; i++) {
      if (!englishDictionary[morseArr[i]]) {
        morseResult += "";
      } else {
        morseResult += englishDictionary[morseArr[i]];
      }
    }
    return morseResult;
  }

  return "";
};
