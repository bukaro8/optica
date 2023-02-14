//? create and send token and save in the cookie

const sendToken = (user, statusCode, res) => {
	//? create JWT token
	const token = user.getJwtToken();

	//?option for coookie
	const options = {
		expires: new Date(
			Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
		),
		httpOnly: true,
	};
	res.status(statusCode).cookie('token', token, options).send({
		success: true,
		token,
		user,
	});
};
module.exports = sendToken;
