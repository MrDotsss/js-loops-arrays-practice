const filterRangeInPlace = require("./filter-in-place")

describe("gets an array and removes from it all values except between a and b", () => {
    test("trial 01", () => {
        let arr = [5, 3, 8, 1]
        filterRangeInPlace(arr, 1, 4)
        expect(arr).toEqual([3, 1])
    })
})