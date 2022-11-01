const express = require('express')
const router = express.Router()
const ProductController = require('./../controllers/products')
// const validateStock = require('./../helpers/stock')

// router.get('/:Order',ProductController.ProductController.getTransactions)
router.get('/:id', ProductController.ProductController.getProductDetail)
router.get('/', ProductController.ProductController.getProduct)
// router.post('/',ProductController.ProductController.insert)
router.post('/', ProductController.ProductController.insert)
router.put('/:id', ProductController.ProductController.update)
router.delete('/:id', ProductController.ProductController.delete)
// router.get('/search', ProductController.ProductController.searchProductname)

module.exports = router
