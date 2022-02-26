import { translateEnglishToMorse } from "../translator.js";
import { expect, it, describe } from "@jest/globals";

describe("translate words from english to morse", () => {
    it("should check input is of type: string", () => {
        const result = translateEnglishToMorse("hello");
        expect(typeof result).toBe("string");
    });
    it("should accept special characters in the input", () => {
        const result = translateEnglishToMorse("Hello world! My Name is Jake");
        expect(result).toBe(
            ".... . .-.. .-.. --- .-- --- .-. .-.. -.. ..--. -- -.-- -. .- -- . .. ... .--- .- -.- ."
        );
    });
    // positive test case for a single word
    it("should translate a word correctly to morse code", () => {
        const result = translateEnglishToMorse("hello");
        expect(result).toBe(".... . .-.. .-.. ---");
    });
    it("should remove any spaces in the input before converting", () => {
        const result = translateEnglishToMorse("      hello");
        expect(result).toBe(".... . .-.. .-.. ---");
    });
    it("should clean a word by converting input to lowercase", () => {
        const result = translateEnglishToMorse("hELlo");
        expect(result).toBe(".... . .-.. .-.. ---");
    });
    it("should accept and translate numbers", () => {
        const result = translateEnglishToMorse("h3ll0");
        expect(result).toBe(".... ...-- .-.. .-.. -----");
    });
    // positive tests for a single letter
    it("should check single letter returns the correct morse", () => {
        const result = translateEnglishToMorse("a");
        expect(result).toBe(".-");
    });
    // positive tests for multiple words
    it("should translate a sentence correctly to morse", () => {
        const result = translateEnglishToMorse("Hello world my name is Jake");
        expect(result).toBe(
            ".... . .-.. .-.. --- .-- --- .-. .-.. -.. -- -.-- -. .- -- . .. ... .--- .- -.- ."
        );
    });
});
