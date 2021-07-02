const { sum } = require('../lib/analytics')

export const format = (data) => {
    return {
        buyer : data.buyer,
        products : data.products,
        date : data.date,
        totalPrice : sum(data.products.map(x => x.price))
    }
}