const sum = (array) => {
    return array.reduce((accumulator, current) => accumulator + current)
}

module.exports = {
    sum: sum
};