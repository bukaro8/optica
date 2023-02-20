const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
	shippingInfo: {
		address: {
			type: String,
			require: true,
		},
		city: {
			type: String,
			require: true,
		},
		phoneNo: {
			type: String,
			require: true,
		},
		country: {
			type: String,
			require: true,
			default: 'Colombia',
		},
	},
});
module.exports = mongoose.model('Order', orderSchema);
