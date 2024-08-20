const express = require('express')
const router = express.Router()

const produitController = require('../controller/ProduitController')

router.get('/produits',produitController.getAllUsers)

module.exports = router;