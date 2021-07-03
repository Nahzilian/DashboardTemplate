const express = require('express');
const router = express.Router();
const { generateMultiplePurchases, generateByRequest } = require('../lib/generatePurchase')

router.get('/', (req, res) => {
    let amount = req.query.amount
    let purchases = amount ? generateByRequest(amount) : generateMultiplePurchases()
    res.send(purchases)
})

module.exports = router