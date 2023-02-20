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
	user: {
		type: mongoose.Schema.Types.ObjectId,
		require: true,
		ref: 'User',
	},
	orderItems: [
		{
			name: {
				type: String,
				require: true,
			},
			quantity: {
				type: Number,
				require: true,
			},
			image: {
				type: String,
				require: true,
			},
			price: {
				type: Number,
				require: true,
			},
			product: {
				type: mongoose.Schema.Types.ObjectId,
				require: true,
				ref: 'Product',
			},
		},
	],
	paymentInfo: {
		id: {
			type: String,
		},
		status: {
			type: String,
		},
	},
	itemsPrice: {
		type: Number,
		require: true,
		default: 0,
	},
	payAt: {
		type: Date,
	},
	orderStatus: {
		type: String,
		require: true,
		default: 'Processing',
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model('Order', orderSchema);
