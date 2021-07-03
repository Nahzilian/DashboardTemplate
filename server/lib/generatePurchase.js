var staticProduct = require('../assets/staticProduct.json')
var staticUser = require('../assets/staticUser.json')
var { format } = require('../models/purchase')


const getRandomAmountOfItem = () => {
    let result = []
    let randomAmount = Math.floor(Math.random() * 10)

    for (var i = 0; i <= randomAmount; i++) {
        let randomItemNum = Math.floor(Math.random() * 40)
        result.push(staticProduct[randomItemNum])
    }

    return result
}

const generatePurchase = () => {
    let randomItems = getRandomAmountOfItem()
    let randomUserId = Math.floor(Math.random() * 30)

    return format({
        buyer: staticUser[randomUserId],
        products: randomItems,
        date: Date.now()
    })
}

const generateMultiplePurchases = () => {
    let randomAmount = Math.floor(Math.random() * 10)
    return generateByRequest(randomAmount)
}

const generateByRequest = (amount) => {
    let result = []
    
    for (var i = 0; i <= amount; i++) {
        result.push(generatePurchase())
    }
    
    return result
}


module.exports = {
    generatePurchase: generatePurchase,
    generateMultiplePurchases: generateMultiplePurchases,
    generateByRequest: generateByRequest
};