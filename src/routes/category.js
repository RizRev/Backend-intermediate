const express = require('express')
const router = express.Router()
const CategoryController = require('./../controllers/category')

router.get('/',CategoryController.CategoryController.getProduct)
router.post('/',CategoryController.CategoryController.insert)
router.put('/:id',CategoryController.CategoryController.update)
router.delete('/:id',CategoryController.CategoryController.delete)

module.exports = router