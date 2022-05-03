const addition = require("../calc")

describe("Calculator function", () => {
    describe("Addition function", () => {
        test("Should return 42 for 20 + 22", () => {
            expect(addition(20,22)).toBe(42);
        });
        test("Should return 21 for 10 + 11", () => {
            expect(addition(10, 11)).toBe(21);
        });
    })
})