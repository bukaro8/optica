const express = require('express');
const router = express.Router();
const { isAuthenticated, authorizeRoles } = require('../middlewares/auth.js');

const {
	getProducts,
	newProduct,
	getProductById,
	productUpdate,
	deleteProduct,
} = require('../controllers/product.controller.js');
//*======================================================

router.get('/products', getProducts);
//*use this route to get products filter by brand brand use this route to get products filter by name
router.get('/product/:productId', getProductById);

//!protected routes===============
router.post(
	'/admin/product/new',
	isAuthenticated,
	authorizeRoles('admin'),
	newProduct
);
router.put(
	'/admin/product/:productId',
	isAuthenticated,
	authorizeRoles('admin'),
	productUpdate
);
router.delete(
	'/admin/product/:productId',
	isAuthenticated,
	authorizeRoles('admin'),
	deleteProduct
);
//!===============================
module.exports = router;
