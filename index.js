import { translateEnglishToMorse } from "./translator.js";

const translatorInput = document.querySelector(".translator__input");
const translatorBtn = document.querySelector(".translator__btn");
const translatorOutput = document.querySelector(".translator__output");

translatorBtn.addEventListener("click", () => {
    translatorOutput.innerText = translateEnglishToMorse(translatorInput.value);
});
