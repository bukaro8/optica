//? check if the user is authenticated

const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

const isAuthenticated = async (req, res, next) => {
	const { token } = req.cookies;
	if (!token) {
		return res.status(401).send({
			success: false,
			message: 'Por favor login para acceder',
		});
	}
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	req.user = await User.findById(decoded.id);
	next();
};

const authorizeRoles = (...roles) => {
	return (req, res, next) => {
		try {
			if (!roles.includes(req.user.role)) {
				throw new Error(`Role (${req.user.role}) no esta autorizado`);
			} else {
				next();
			}
		} catch (error) {
			res.status(403).send({
				success: false,
				message: error.message,
			});
		}
	};
};
module.exports = { isAuthenticated, authorizeRoles };
