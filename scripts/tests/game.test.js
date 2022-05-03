/**
 * @jest-environment jsdom
 */

const {
    game, newGame, showScore
} = require("../game")


beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

describe("game object contains correct keys", () => {
    test("Score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("Expect choices to contain the correct ids", () => {
        expect(game.choices).toEqual(["button", "button2", "button3", "button4"])
    })
})

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.currentGame = [1, 2, 3]
        game.playerMoves = ['button2', 'button1']
        document.getElementById('score').innerText = '42'
        console.log(document.getElementById('score').innerText)
        newGame();
    })
    test("Expect score to be initialized to 0", () => {
        expect(game.score).toBe(0)
    });
    test("Expect currenGame to be initialized to an empty array", () => {
        expect(game.currentGame).toStrictEqual([])
    });
    test("Expect playerMoves to be initialized to an empty array", () => {
        expect(game.playerMoves).toStrictEqual([])
    });
    test("Expect the displayed score to be reset to 0", () => {
        expect(parseInt(document.getElementById("score").textContent)).toEqual(0);
    });
})