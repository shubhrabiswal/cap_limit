const express = require('express');
const router = express.Router();
const productController = require('../controller/productController')

router.post('/addproduct',productController.addproduct)
router.get('/calculate/:id',productController.calculate)
router.get('/:id',productController.getdetails)



module.exports = router;