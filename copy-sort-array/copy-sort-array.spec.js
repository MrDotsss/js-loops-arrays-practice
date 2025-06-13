const copySorted = require("./copy-sort-array")

test("copied and sorted", () => {
        let arr = ["HTML", "JavaScript", "CSS"]
        expect(copySorted(arr)).toEqual(["CSS", "HTML", "JavaScript"])
        expect(copySorted(arr)).not.toBe(arr)
    });