const sortDecreasingOrder = require("./sort-decreasing")

describe("sort arrays in decreasing order", () => {
    test("trial 01", () => {
        let arr = [5, 2, 1, -10, 8]
        expect(sortDecreasingOrder(arr)).toEqual([8, 5, 2, 1, -10])
    })
}) 