import { describe } from "node:test";
import { messageGenerator } from "./index.js";
import { test, expect } from "vitest";

describe("messageGenerator tests with different word lengths", () => {
    test("messageGenerator with argument of 3 should return a three word string", () => {
        const wordLength = messageGenerator(3).split(" ").length;
        expect(wordLength).toEqual(3);
    })
    
    test("messageGenerator with argument of 2 should return a two word string", () => {
        const wordLength = messageGenerator(2).split(" ").length;
        expect(wordLength).toEqual(2);
    })
    
    test("messageGenerator with argument of 7 should return a seven word string", () => {
        const wordLength = messageGenerator(7).split(" ").length;
        expect(wordLength).toEqual(7);
    })
})