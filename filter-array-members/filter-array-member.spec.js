const unique = require("./filter-array-member")

test("Return an array with unique items from array", () => {
    let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-0"]
    expect(unique(strings)).toEqual(["Hare", "Krishna", ":-0"])
    expect(unique(strings).length).toEqual(3)
})