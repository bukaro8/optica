const User = require('../models/user.js');
const sendToken = require('../utils/jwtToken.js');
const sendEmail = require('../utils/sendEmail.js');
const crypto = require('crypto');
const registerUser = async (req, res) => {
	const { name, email, password, avatar, role } = req.body;
	try {
		const user = await User.create({
			name,
			email,
			password,
			avatar: {
				public_id: 'photos/cld-sample.jpg',
				url: 'https://res.cloudinary.com/dsek7f0ce/image/upload/v1675606724/cld-sample.jpg',
			},
			role,
		});
		sendToken(user, 200, res);
	} catch (error) {
		res.status(403).send({ message: error.message });
	}
};
const login = async (req, res) => {
	const { email, password } = req.body;
	//?Check if email and password is entered by user

	if (!email || !password) {
		return res

			.status(400)
			.send({ message: 'Por favor ingrese el correo y password' });
	}
	try {
		const user = await User.findOne({ email }).select('+password');
		const isPasswordMatched = await user.comparePassword(password);
		if (!isPasswordMatched) {
			return res.status(401).send({
				success: false,
				message: 'error password',
			});
		} else {
			sendToken(user, 200, res);
		}
	} catch (error) {
		res.status(401).send({ message: error.message });
	}
};
const logout = async (req, res, next) => {
	try {
		res.cookie('token', null, {
			expires: new Date(Date.now()),
			httpOnly: true,
		});
		res.status(200).send({
			success: true,
			message: 'la sesion ha sido cerrada ',
		});
	} catch (error) {
		res.status(404).send({
			success: false,
			message: error.message,
		});
	}
};

//?FORGOT PASSWORD api/v1/password/forgot
const forgotPassword = async (req, res, next) => {
	try {
		const user = await User.findOne({ email: req.body.email });

		const resetToken = user.getResetPasswordToken();

		await user.save({ validateBeforeSave: false });
		const resetUrl = `${req.protocol}://${req.get(
			'host'
		)}/api/v1/password/reset/${resetToken}`;

		const message = `Tu password token es el siguiente:\n\n${resetUrl}\n\n, si tu no lo solicitaste por favor contactanos `;
		try {
			await sendEmail({
				email: user.email,
				subject: 'IPS La Central Recovery Password',
				message,
			});
			res.status(200).send({
				success: true,
				message: `Email fue enviado a ${user.email}`,
			});
		} catch (error) {
			user.resetPasswordToken = undefined;
			user.resetPasswordExpire = undefined;
			await user.save({ validateBeforeSave: false });
			res.status(500).send({ success: false, message: error.message });
		}
	} catch (error) {
		res.status(404).send({
			success: false,
			message: 'usuario no ha sido encontrado',
		});
	}
};
//?reset password api/v1/password/reset/:token
const resetPassword = async (req, res, next) => {
	//?hash URL token
	try {
		const resetPasswordToken = crypto
			.createHash('sha256')
			.update(req.params.token)
			.digest('hex');

		const user = await User.findOne({
			resetPasswordToken,
			resetPasswordExpire: { $gt: Date.now() },
		});
		if (!user) {
			throw new Error({ message: 'El token es invalido o ha expirado' });
		}
		if (req.body.password !== req.body.confirmPassword) {
			throw new Error({ message: 'El password esta errado' });
		}
		//? setup new password
		user.password = req.body.password;
		user.resetPasswordToken = undefined;
		user.resetPasswordExpire = undefined;
		await user.save();
		sendToken(user, 200, res);
	} catch (error) {
		res.status(400).send({
			success: false,
			message: error.message,
		});
	}
};
//? get currently logged in user details api/vi/me
const getUserProfile = async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id);
		res.status(200).send({ success: true, user });
	} catch (error) {
		res.status(400).send({ success: false, message: error.message });
	}
};
//?update/ change password => api/v1/password/update
const updatePassword = async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id).select('+password');

		//?check previous user password
		const isMatched = await user.comparePassword(req.body.oldPassword);
		if (!isMatched) {
			throw new Error('Password Incorrecto');
		}
		user.password = req.body.password;
		await user.save();
		res.status(200).send({ success: true, user });
	} catch (error) {
		res.status(400).send({ success: false, message: error.message });
	}
};
//?update user profile api/v1/me/update
const updateProfile = async (req, res, next) => {
	try {
		const newUserData = {
			name: req.body.name,
			email: req.body.email,
		};
		const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
			new: true,
			runValidators: true,
			useFindAndModify: false,
		});

		res.status(200).send({ success: true });
	} catch (error) {
		res.status(400).send({ success: false, message: error.message });
	}
};

//!ADMIN ROUTES

//?get all users

const getAllUsers = async (req, res, next) => {
	try {
		const users = await User.find();
		res.status(200).send({ success: true, users });
	} catch (error) {
		res.status(400).send({ success: false, message: error.message });
	}
};
//? api/v1/user/:id
const getUserDetails = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) {
			throw new Error('El usuario no existe');
		}
		res.status(200).send({ success: true, user });
	} catch (error) {
		res.status(400).send({ success: false, message: error.message });
	}
};

//? api/v1/admin/user/:id
const adminUpdateProfile = async (req, res, next) => {
	try {
		const newUserData = {
			name: req.body.name,
			email: req.body.email,
			role: req.body.role,
		};
		const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
			new: true,
			runValidators: true,
			useFindAndModify: false,
		});

		res.status(200).send({ success: true });
	} catch (error) {
		res.status(400).send({ success: false, message: error.message });
	}
};
const deleteUser = async (req, res, next) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if (!user) {
			throw new Error('Usuario no existe');
		}
		res.status(200).send({ success: true, message: 'Usuario ha sido Borrado' });
	} catch (error) {
		res.status(400).send({ success: false, message: error.message });
	}
};
module.exports = {
	registerUser,
	login,
	logout,
	forgotPassword,
	resetPassword,
	getUserProfile,
	updatePassword,
	updateProfile,
	getAllUsers,
	getUserDetails,
	adminUpdateProfile,
	deleteUser,
};
