const shuffle = require("./shuffle-array")

test("same array object and length", () => {
    let arr = [1, 2, 3]
    expect(shuffle(arr)).toBe(arr)
    expect(shuffle(arr).length).toEqual(3)
})