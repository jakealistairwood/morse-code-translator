import { translateEnglishToMorse } from "../translator.js";
import { expect, it, describe } from "@jest/globals";

describe("translate words from english to morse", () => {
    // positive test case for a single word
    it("should translate a word correctly to morse code", () => {
        const result = translateEnglishToMorse("hello");
        expect(result).toBe(".... . .-.. .-.. ---");
    });
    it("should remove any spaces in the input before converting", () => {
        const result = translateEnglishToMorse("      ");
        expect(result).toBe("");
    });
    it("should clean a word by converting input to lowercase", () => {
        const result = translateEnglishToMorse("hELlo");
        expect(result).toBe(".... . .-.. .-.. ---");
    });
    it("should accept and translate numbers", () => {
        const result = translateEnglishToMorse("0123456789");
        expect(result).toBe(
            "----- .---- ..--- ...-- ....- ..... -.... --... ---.. ----."
        );
    });
    // positive tests for a single letter
    it("should check single letter returns the correct morse", () => {
        const result = translateEnglishToMorse("a");
        expect(result).toBe(".-");
    });
    // positive tests for multiple words

    // negative tests for edge cases
});

// describe("translates morse code to english", () => {});
