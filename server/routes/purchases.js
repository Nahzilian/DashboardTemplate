const express = require('express');
const router = express.Router();
const { generateMultiplePurchases } = require('../lib/generatePurchase')

router.get('/', (req, res) => {
    let purchases = generateMultiplePurchases()
    res.send(purchases)
})

module.exports = router