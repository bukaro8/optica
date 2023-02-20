const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Por favor ingrese el nombre del Usuario'],
		trim: true,
		maxLength: [
			150,
			'El nombre del producto debe ser inferior a 150 caracteres',
		],
	},

	email: {
		type: String,
		required: [true, 'Por favor ingrese Email'],
		unique: true,
		validate: [validator.isEmail, 'Por favor ingrese E-mail'],
	},
	password: {
		type: String,
		required: [true, 'Por favor ingrese un password'],
		minlength: [6, 'Password debe tener mas de 6 caracteres'],
		select: false,
	},
	avatar: {
		public_id: {
			type: String,
			required: true,
		},
		url: {
			type: String,
			required: true,
		},
	},
	role: {
		type: String,
		default: 'user',
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	resetPasswordToken: String,
	resetPasswordExpire: Date,
});
//!encrypting password before saving
userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}
	this.password = await bcrypt.hash(this.password, 10);
});

//!compare the password
userSchema.methods.comparePassword = async function (pass) {
	return await bcrypt.compare(pass, this.password);
};

//! return JWT token
userSchema.methods.getJwtToken = function () {
	return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_TIME,
	});
};
//! generate password reset token
userSchema.methods.getResetPasswordToken = function () {
	//?create token
	const resetToken = crypto.randomBytes(20).toString('hex');
	//?hash and set to resetPasswordToken
	this.resetPasswordToken = crypto
		.createHash('sha256')
		.update(resetToken)
		.digest('hex');
	//?set token expire time
	this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;
	return resetToken;
};

module.exports = mongoose.model('User', userSchema);
