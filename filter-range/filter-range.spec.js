const filterRange = require("./filter-range")

const arr1 = [5, 3, 8, 1]

describe("filter an array with range of number a and b", () => {
    test("trial 01", () => {
        expect(filterRange(arr1, 1, 4)).toEqual([3, 1])
    });
    test("trial 02", () => {
        expect(filterRange(arr1, 1, 4)).not.toBe(arr1)
    })
});