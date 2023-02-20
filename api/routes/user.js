const express = require('express');
const router = express.Router();
const {
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
} = require('../controllers/user.controller.js');
const { isAuthenticated, authorizeRoles } = require('../middlewares/auth.js');
router.post('/register', registerUser);
router.get('/login', login);
router.get('/logout', logout);
router.post('/password/forgot', forgotPassword);
router.put('/password/reset/:token', resetPassword);
router.get('/me', isAuthenticated, getUserProfile);
router.put('/password/update', isAuthenticated, updatePassword);
router.put('/me/update', isAuthenticated, updateProfile);

router.get(
	'/admin/users',
	isAuthenticated,
	authorizeRoles('admin'),
	getAllUsers
);
router.get(
	'/admin/user/:id',
	isAuthenticated,
	authorizeRoles('admin'),
	getUserDetails
);
router.put(
	'/admin/user/:id',
	isAuthenticated,
	authorizeRoles('admin'),
	adminUpdateProfile
);
router.delete(
	'/admin/user/:id',
	isAuthenticated,
	authorizeRoles('admin'),
	deleteUser
);

module.exports = router;
