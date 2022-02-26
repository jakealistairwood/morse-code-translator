import { translateEnglishToMorse } from "./translator.js";

const translatorInput = document.querySelector(".translator__input");
const translatorBtn = document.querySelector(".translator__btn--translate");
const translatorClearBtn = document.querySelector(".translator__btn--clear");
const translatorOutput = document.querySelector(".translator__output");

const clearOutput = () => {
    return (translatorOutput.innerText = "");
};

translatorBtn.addEventListener("click", () => {
    translatorOutput.innerText = translateEnglishToMorse(translatorInput.value);
});

translatorClearBtn.addEventListener("click", clearOutput);
