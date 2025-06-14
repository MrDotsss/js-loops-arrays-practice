function unique(arr) {
    let results = []
    for(let item of arr) {
        if(!results.includes(item)) {
            results.push(item)
        }
    }

    return results;
}

module.exports = unique;