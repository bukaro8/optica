const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const fileUpload = require('express-fileupload');
//!middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
app.use(bodyparser.urlencoded({ extended: true }));

//!Import all routes
const products = require('./routes/product.js');
const users = require('./routes/user.js');
const order = require('./routes/order');

app.use('/api/v1', products);
app.use('/api/v1', users);
app.use('/api/v1', order);
module.exports = app;
