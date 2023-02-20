const Order = require('../models/order.js');
const Product = require('../models/product');

//?create new order /api/v1/order/new
const newOrder = async (req, res, next) => {
	try {
		const { orderItems, shippingInfo, itemsPrice, paymentInfo } = req.body;
		const order = await Order.create({
			orderItems,
			shippingInfo,
			itemsPrice,
			paymentInfo,
			payAt: Date.now(),
			user: req.user._id,
		});
		res.status(200).send({
			success: true,
			order,
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			message: error.message,
		});
	}
};
module.exports = { newOrder };
