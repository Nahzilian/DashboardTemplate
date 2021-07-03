const { sum } = require('../lib/analytics')

const format = (data) => {
    return {
        ...data,
        totalPrice : sum(data.products.map(x => x.price))
    }
}

module.exports = {
    format: format
}