const express = require('express');
const router = express.Router();

const { newOrder } = require('../controllers/order.controller.js');
const { isAuthenticated, authorizeRoles } = require('../middlewares/auth.js');

router.post('/order/new', isAuthenticated, newOrder);

module.exports = router;
