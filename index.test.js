import { describe } from "node:test";
import { messageGenerator, words, repeatChecker } from "./index.js";
import { test, expect } from "vitest";

describe("Tests the lenghts of the messageGenerator return values", () => {
    
    test("messageGenerator with argument of 7 should return a seven word string", () => {
        const wordLength = messageGenerator(7, words).split(" ").length;
        expect(wordLength).toEqual(7);
    })

    test("messageGenerator with argument of 3 should return a three word string", () => {
        const wordLength = messageGenerator(3, words).split(" ").length;
        expect(wordLength).toEqual(3);
    })

    test("messageGenerator with argument of 13 should throw an error because the length of the given array is less (12).", () => {
        expect(() => messageGenerator(13, words)).toThrow();
    })

    test("messageGenerator with argument of 22 should throw an error because the length of the given array is less (12).", () => {
        expect(() => messageGenerator(22, words)).toThrow();
    })

})

describe("Tests the word repetition of the messageGenerator return values", () => {
    
    test("repeatChecker called with messageGenerator, given a 7 as word number in the sentence and an array of words with 12 item should return true", () => {
        expect(repeatChecker(messageGenerator(7, words))).toEqual(true);
    })

    test("repeatChecker called with messageGenerator, given a 10 as word number in the sentence and an array of words with 12 item should return true", () => {
        expect(repeatChecker(messageGenerator(10, words))).toEqual(true);
    })

    test("repeatChecker called with messageGenerator, given a 3 as word number in the sentence and an array of words with 12 item should return true", () => {
        expect(repeatChecker(messageGenerator(3, words))).toEqual(true);
    })

    test("repeatChecker called with messageGenerator, given a 5 as word number in the sentence and an array of words with 12 item should return true", () => {
        expect(repeatChecker(messageGenerator(5, words))).toEqual(true);
    })
})