const User = require('../models/user.js');
const sendToken = require('../utils/jwtToken.js');

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

module.exports = { registerUser, login, logout };
