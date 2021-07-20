const express = require('express');
const router = express.Router();
const { generateMultiplePurchases, generateByRequest } = require('../lib/generatePurchase')

router.get('/', (req, res) => {
    let page = req.query.page
    let limit = req.query.limit
    let purchases = page ? generateByRequest(limit) : generateMultiplePurchases()
    res.send(purchases)
})

module.exports = router