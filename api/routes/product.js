const express = require('express');
const router = express.Router();

const {
	getProducts,
	newProduct,
	getProductById,
	productUpdate,
	deleteProduct,
} = require('../controllers/product.controller.js');
//*======================================================
router.get('/products', getProducts);
//*use this route to get products filter by brand ?brand
//*use this route to get products filter by name
router.get('/product/:productId', getProductById);
router.put('/admin/product/:productId', productUpdate);
router.post('/admin/product/new', newProduct);
router.delete('/admin/product/:productId', deleteProduct);
module.exports = router;
