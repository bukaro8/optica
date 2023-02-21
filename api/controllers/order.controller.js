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
//? get single order api/v1/order/:id
const getSingleOrder = async (req, res, next) => {
	try {
		const order = await Order.findById(req.params.id);
		if (!order) {
			throw new Error('No se encontro ninguna orden con ese ID');
		}
		res.status(200).send({
			success: true,
			order,
		});
	} catch (error) {
		res.status(404).send({
			success: false,
			message: error.message,
		});
	}
};
//?get logged in user order /api/v1/orders/me
const myOrders = async (req, res, next) => {
	try {
		const orders = await Order.find({ user: req.user.id });

		res.status(200).send({
			success: true,
			orders,
		});
	} catch (error) {
		res.status(404).send({
			success: false,
			message: error.message,
		});
	}
};
//?get all orders /api/v1/admin/orders
const allOrders = async (req, res, next) => {
	try {
		const orders = await Order.find();

		let totalAmount = 0;

		orders.forEach((order) => {
			totalAmount += order.itemsPrice;
		});
		res.status(200).send({ success: true, totalAmount, orders });
	} catch (error) {
		res.status(400).send({
			success: false,
			message: error.message,
		});
	}
};
//?update order ADMIN /api/v1/admin/order/:id
const updateOrder = async (req, res, next) => {
	const { status } = req.body;
	try {
		const order = await Order.findById(req.params.id);
		if (!order) {
			throw new Error('La order con ese ID no existe');
		}
		order.orderStatus = status;
		order.deliveredAt = Date.now();
		order.save();
		res.status(200).send({
			success: true,
			order,
		});
	} catch (error) {
		res.status(404).send({
			success: false,
			message: error.message,
		});
	}
};
//?delete order admin /api/v1/admin/order/delete/:id
const deleteOrder = async (req, res, next) => {
	try {
		const order = await Order.findByIdAndDelete(req.params.id);
		if (!order) {
			throw new Error('La order con ese ID no existe');
		}

		order.save();
		res.status(200).send({
			success: true,
		});
	} catch (error) {
		res.status(404).send({
			success: false,
			message: error.message,
		});
	}
};
module.exports = {
	newOrder,
	getSingleOrder,
	myOrders,
	allOrders,
	updateOrder,
	updateOrder,
	deleteOrder,
};
