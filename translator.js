import { morseAlphabet } from "./data/morse.js";

console.log(morseAlphabet);

export const translateEnglishToMorse = strToTranslate => {
    let cleanedStr = strToTranslate.toLowerCase().split(" ").join("").split("");
    let translatedStr = cleanedStr
        .map(char => {
            return morseAlphabet[char];
        })
        .join(" ");
    return translatedStr;
};
