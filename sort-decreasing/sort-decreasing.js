function sortDecreasingOrder(arr) {
    return arr.sort((a, b) => a < b ? 1 : -1)
}

module.exports = sortDecreasingOrder