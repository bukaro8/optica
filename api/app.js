const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
// const bodyparser = require('body-parser');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary');

//!middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
// app.use((req, res, next) => {
// 	res.setHeader('Access-Control-Allow-Origin', '*');
// 	next();
// });
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

//!Import all routes
const products = require('./routes/product.js');
const users = require('./routes/user.js');
const order = require('./routes/order');

app.use('/api/v1', products);
app.use('/api/v1', users);
app.use('/api/v1', order);
module.exports = app;
