const express = require('express');
const router = express.Router();
const {
	registerUser,
	login,
	logout,
} = require('../controllers/user.controller.js');

router.post('/', registerUser);
router.get('/login', login);
router.get('/logout', logout);

module.exports = router;
