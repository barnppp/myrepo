import calcFunc from "../script.js";

test("Тест функции calcFunc", () => {

    expect(calcFunc(10, 10, 3)).toBe(60);
})