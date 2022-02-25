import { translateEnglishToMorse } from "../translator.js";
import { expect, it, describe } from "@jest/globals";

describe("translate words from english to morse", () => {
    // positive test case for a single word
    it("should translate a word correctly to morse code", () => {
        const result = translateEnglishToMorse("hello");
        expect(result).toBe(".... . .-.. .-.. ---");
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
