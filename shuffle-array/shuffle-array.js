function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5)
}

module.exports = shuffle